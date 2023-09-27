"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import ChatbotImageSrc from "public/chatbot.png";
import Messages from "./Messages";
import UserInput from "./UserInput";
import { ChatContext, ChatProvider, useChat } from "../../contexts/chat";
import chatBotCreationPrompt from "../../prompts/chatBot";
import { nanoid } from "nanoid";

import styles from "./styles.module.css";

const defaultIntroMessage = `
Hey there, digital wanderer! I’m Byte, your cyber sidekick, wired and ready to dive deep into the realms of software engineering and web development. Crafted by the code maestro Dean Wagman, I’m here, glowing with blue lights and a playful spark, to guide you through the digital maze. Got queries about Dean's techno wizardry, his experience in the vast universe of software and web? Fire away! Let’s navigate the cyber lanes and light up the path with quick and snazzy answers, all with a futuristic flair. Ready to ride the data waves? Let’s roll! 🤖💡
`;

const createMessage = ({ role, content = "" }) => ({
  id: nanoid(),
  createdAt: Date.now(),
  role,
  content,
});

const adaptUserMessage = (message) =>
  createMessage({
    role: "user",
    content: message,
  });
const adaptAiMessage = (message) =>
  createMessage({
    role: "assistant",
    content: message,
  });
const adaptSystemMessage = (message) =>
  createMessage({
    role: "system",
    content: message,
  });

const defaultMessages = [
  adaptSystemMessage(chatBotCreationPrompt),
  adaptAiMessage(defaultIntroMessage),
];

const shouldSendMessages = (messages) => {
  const { role: lastMessageSenderRole } = messages[messages.length - 1];
  return lastMessageSenderRole === "user";
};

const Container = ({ closeChat }) => {
  const [messages, setMessages] = useState(defaultMessages);
  const [isRequesting, setIsRequesting] = useState(false);

  const addUserMessage = (message) =>
    setMessages([...messages, adaptUserMessage(message)]);
  const clearMessages = () => setMessages([]);
  const filteredMessages = messages.filter(({ role }) => role !== "system");

  const updateMessage = (id, updateFn = () => {}) => {
    setMessages((prev) =>
      prev.map((message) => {
        if (message.id === id) {
          return { ...message, content: updateFn(message.content) };
        }
        return message;
      })
    );
  };

  const handleBackdropClick = (e) => {
    const { target } = e;
    console.log({ e, target });
    if (target.id === "chat-container") {
      closeChat();
    }
  };

  const chatProviderValue = {
    messages: filteredMessages,
    addUserMessage,
    clearMessages,
  };

  useEffect(() => {
    const request = async () => {
      setIsRequesting(true);

      const encoder = new TextEncoder();
      const decoder = new TextDecoder();

      try {
        const response = await fetch("/api/message", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ messages }),
        });

        const reader = response.body.getReader();

        const newMessage = createMessage({
          role: "assistant",
          content: "",
        });

        setIsRequesting(false);

        setMessages([...messages, newMessage]);

        while (true) {
          const { done, value } = await reader.read();

          if (done) {
            break;
          }

          const text = decoder.decode(value);

          updateMessage(newMessage.id, (prevText) => prevText + text);
        }
      } catch (error) {
        setIsRequesting(false);
        console.error(error);
      }
    };

    try {
      if (shouldSendMessages(messages)) {
        request();
      }
    } catch (error) {
      console.log(error);
    }
  }, [messages]);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "flex-end",
        height: "100%",
      }}
    >
      <ChatProvider value={chatProviderValue}>
        <div
          id="chat-container"
          className={[
            styles.container,
            isRequesting ? styles.shimmer : "",
          ].join(" ")}
          onClick={handleBackdropClick}
        >
          <Image
            src={ChatbotImageSrc}
            alt="Chatbot"
            className={styles.chatBotAvatar}
          />
          <div className={styles.main}>
            <Messages messages={filteredMessages} />
            <UserInput onSubmit={addUserMessage} />
          </div>
        </div>
      </ChatProvider>
    </div>
  );
};

export default Container;
