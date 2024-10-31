"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ChatbotImageSrc from "public/chatbot.png";
// import styles from "./styles.module.css";
import Message from "./Message";
import { useBackdropFilter } from "../../contexts/backdrop-filter";
import { useSpring, animated, config, useTransition } from "@react-spring/web";

import Messages from "./Messages";
import UserInput from "./UserInput";
import { ChatProvider } from "../../contexts/chat";
import chatBotCreationPrompt from "../../prompts/chatBot";
import { nanoid } from "nanoid";

const defaultIntroMessage = `
Hey there, wanderer of the digital universe! Welcome onboard.🚀 You've docked at Dean's cyberspace station, your one-stop hub for all things software engineering and web development. I'm Byte, your friendly cyber companion, ready to serve up answers and insights in byte-sized (pun totally intended!) doses. Intrigued by Dean's tech expertise or in need of some web wisdom? Let's dive right in. Ready to surf the code waves with me? 🤖🌊
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

const FullScreenChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isExited, setIsExited] = useState(false);
  const { setBlur, setBrightness } = useBackdropFilter();

  const messageContainerRef = useRef();
  const avatarRef = useRef();

  const onEscape = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  const [messages, setMessages] = useState(defaultMessages);
  const [isRequesting, setIsRequesting] = useState(false);

  const addUserMessage = (message) =>
    setMessages((prevMessages) => [...prevMessages, adaptUserMessage(message)]);
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
    if (target.id === "chat-container") {
      setIsOpen(false);
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

        setMessages((messages) => [...messages, newMessage]);

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
      console.error(error);
    }
  }, [messages]);

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEscape);
    }
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const [containerSpringProps, containerSpring] = useSpring(() => ({
    config: config.stiff,
    from: { backgroundColor: "rgba(0, 0, 0, 0.5)" },
  }));

  const chatWindowWidths = {
    sm: 380,
    md: 380,
    lg: 400,
    xl: 440,
  };
  const windowWidth = window.innerWidth;
  const size =
    windowWidth < 690
      ? "sm"
      : windowWidth < 768
      ? "md"
      : windowWidth < 1400
      ? "lg"
      : "xl";
  const chatWindowWidth = chatWindowWidths[size];

  const avatarWidths = {
    sm: 100,
    md: 150,
    lg: 150,
    xl: 200,
  };
  const avatarWidth = avatarWidths[size];

  const [chatSpringProps, chatSpring] = useSpring(() => ({
    config: config.stiff,
    from: {
      position: "absolute",
      bottom: 0,
      right: 0,
      translateX: isOpen ? 0 : chatWindowWidth,
      maxWidth: "80ch",
      margin: 0,
      opacity: 0,
      padding: "1em",
      borderTopLeftRadius: "10rem",
      backgroundColor:
        size === "sm" || size === "md" || size === "lg"
          ? "rgba(0, 0, 0, 0.5)"
          : "rgba(0, 0, 0, 0)",
      backdropFilter: "blur(3px)",
    },
    to: {
      opacity: 1,
    },
  }));

  const [avatarSpringProps, avatarSpring] = useSpring(() => ({
    config: config.stiff,
    from: {
      // rotateY: 180,
      width: avatarWidth,
      translateX: 0,
      translateY: 0,
      rotateY: isOpen ? 0 : 180,
      filter: "grayscale(0.3)",
      overflow: "hidden",
    },
  }));
  const [welcomeMessageSpringProps, welcomeMessageSpring] = useSpring(() => ({
    config: config.stiff,
    from: { opacity: 1 },
  }));
  const [openButtonSpringProps, openButtonSpring] = useSpring(() => ({
    config: {
      ...config.slow,
      tension: 10,
      friction: 10,
    },
    from: { opacity: 1, translateY: "-2em" },
  }));
  const [closeButtonSpringProps, closeButtonSpring] = useSpring(() => ({
    config: {
      ...config.slow,
      tension: 10,
      friction: 10,
    },
    from: { opacity: 1, translateY: "-1em" },
  }));

  const exit = () => {
    chatSpring.start({ right: -1 * chatWindowWidth });

    // Wait for the animation to finish
    setTimeout(() => {
      setIsExited(true);
      // Set local storage to prevent chat from opening again
      localStorage.setItem("chatbot-exited", "true");
    }, 4000);
  };

  const RestoreIcon = () => (
    <button
      style={{
        position: "absolute",
        bottom: "1em",
        right: "1em",
        zIndex: 999,
        transform: "scale(0.68)",
        filter: "grayscale(0.3) brightness(0.8) opacity(0.5)",
        mixBlendMode: "darken",
      }}
      onClick={() => {
        setIsExited(false);
        localStorage.removeItem("chatbot-exited");
      }}
    >
      Restore
    </button>
  );

  useEffect(() => {
    const hasExited = localStorage.getItem("chatbot-exited");
    const hasEntered = Boolean(localStorage.getItem("chatbot-entered"));
    if (hasExited) {
      setIsExited(true);
      return;
    }

    if (hasEntered) {
      chatSpring.set({ opacity: 1 });
      return;
    }

    const t = setTimeout(() => {
      localStorage.setItem("chatbot-entered", "true");
      chatSpring.start({ opacity: 1 });
    }, 3_000);

    return () => {
      localStorage.removeItem("chatbot-entered");
      clearTimeout(t);
    };
  }, []);

  return isExited ? (
    <RestoreIcon />
  ) : (
    <animated.div
      id="chat-container"
      // className={styles.chatWindow}
      style={{
        ...chatSpringProps,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: "100%",
          overflow: "visible",
        }}
      >
        {/* Buttons */}
        <div
          id="chat-container--buttons"
          style={{
            filter: "grayscale(0.3)",
            textTransform: "uppercase",
            // zIndex: 999,
            // opacity: 0.9,
            // display: "flex",
            flexDirection: "column",
            gap: "1em",
          }}
        >
          <animated.button
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              borderRadius: "0.68em",
              ...openButtonSpringProps,
            }}
            onClick={() => {
              chatSpring.start({
                translateX: 0,
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              });
              avatarSpring.start({ rotateY: 0 });
              welcomeMessageSpring.start({ opacity: 0 });
              openButtonSpring.start({ opacity: 0 });

              setIsOpen(true);
            }}
          >
            Open
          </animated.button>
          <animated.button
            style={{
              textTransform: "uppercase",
              fontWeight: "bold",
              borderRadius: "0.68em",
              ...closeButtonSpringProps,
            }}
            onClick={() => {
              if (!isOpen) {
                exit();
                return;
              }

              chatSpring.start({
                translateX: chatWindowWidth,
                backdropFilter: "none",
              });
              avatarSpring.start({ rotateY: 180 });
              welcomeMessageSpring.start({ opacity: 1 });
              openButtonSpring.start({ opacity: 1 });

              setIsOpen(false);
            }}
          >
            Close
          </animated.button>
        </div>

        <div onClick={toggleChat}>
          <animated.div style={welcomeMessageSpringProps}>
            <Message
              message="Beep boop! Have a question about dean? Ask me!"
              direction="in"
              simulate
              delay={5000}
            />
          </animated.div>
          <animated.div style={avatarSpringProps}>
            <Image
              src={ChatbotImageSrc}
              alt="Chatbot"
              // className={styles.chatBotAvatar}
              style={{
                filter: "grayscale(0.3)",
                width: "100%",
                objectPosition: "0px 40px",
              }}
            />
          </animated.div>
        </div>

        <ChatProvider value={chatProviderValue}>
          <div
            onClick={handleBackdropClick}
            ref={messageContainerRef}
            style={{
              padding: "1em",
            }}
          >
            <Messages messages={filteredMessages} />
            <UserInput onSubmit={addUserMessage} />
          </div>
        </ChatProvider>
      </div>
    </animated.div>
  );
};

export default FullScreenChat;
