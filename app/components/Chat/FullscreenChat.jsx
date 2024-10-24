"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import ChatbotImageSrc from "public/chatbot.png";
import styles from "./styles.module.css";
import Message from "./Message";
import { useBackdropFilter } from "../../contexts/backdrop-filter";
import { useSpring, animated, config } from "@react-spring/web";

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
    const hasExited = localStorage.getItem("chatbot-exited");
    if (hasExited) {
      setIsExited(true);
    }
  });

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

  useEffect(() => {
    if (isOpen) {
      setBlur(30);
      setBrightness(50);
    } else {
      setBlur(0);
      setBrightness(100);
    }

    return () => {
      setBlur(3);
      setBrightness(100);
    };
  }, [isOpen, setBlur, setBrightness]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  const [chatSpringProps, chatSpring] = useSpring(() => ({
    config: config.stiff,
    x: 0,
  }));
  const [avatarSpringProps, avatarSpring] = useSpring(() => ({
    config: config.stiff,
    rotateY: isOpen ? 0 : 180,
    translateX: 0,
    from: { rotateY: 180, translateX: 0 },
    to: { rotateY: 0, translateX: 0 },
    delay: 1000,
  }));
  const [welcomeMessageSpringProps, welcomeMessageSpring] = useSpring(() => ({
    config: config.stiff,
    from: { opacity: 0 },
    to: { opacity: 0 },
    delay: 5000,
  }));
  const [openButtonSpringProps, openButtonSpring] = useSpring(() => ({
    config: {
      ...config.slow,
      tension: 10,
      friction: 10,
    },
    from: { opacity: 0 },
    to: { opacity: 0 },
    delay: 5000,
  }));
  const [closeButtonSpringProps, closeButtonSpring] = useSpring(() => ({
    config: {
      ...config.slow,
      tension: 10,
      friction: 10,
    },
    from: { opacity: 0 },
    to: { opacity: 0 },
    delay: 5000,
  }));

  useEffect(() => {
    const width = messageContainerRef.current?.clientWidth || 0;
    const avatarWidth = avatarRef.current?.clientWidth || 0;
    const avatarOffsetX = 32;

    if (isOpen) {
      chatSpring.start({ x: -1 * (width + avatarWidth) });
      avatarSpring.start({ rotateY: 0, translateX: avatarOffsetX });
      welcomeMessageSpring.start({ opacity: 0 });
      openButtonSpring.start({ opacity: 0 });
      closeButtonSpring.start({ opacity: 1, translateX: 100 });
    } else {
      chatSpring.start({ x: 0 });
      avatarSpring.start({
        rotateY: 180,
        translateX: avatarWidth,
        delay: 3000,
      });
      welcomeMessageSpring.start({ opacity: 1, delay: 4000 });
      closeButtonSpring.start({ opacity: 1, delay: 4000, translateX: 0 });
      openButtonSpring.start({ opacity: 1, delay: 5000 });
    }
  }, [isOpen, chatSpring, welcomeMessageSpring, isExited]);

  const exit = () => {
    chatSpring.start({ x: 0 });
    avatarSpring.start({ translateX: 0 });
    welcomeMessageSpring.start({ opacity: 0, delay: 1000 });
    openButtonSpring.start({ opacity: 0, delay: 1300 });
    closeButtonSpring.start({ opacity: 0, delay: 2000 });

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

  return isExited ? (
    <RestoreIcon />
  ) : (
    <animated.div
      id="chat-window"
      className={styles.chatWindow}
      style={{
        position: "fixed",
        bottom: 0,
        left: "100vw",
        zIndex: 999,
        backdropFilter:
          "blur(6px) brightness(50%) contrast(100%) grayscale(30%)",
        display: "flex",
        flexDirection: "row",
        filter: "grayscale(0.3)",
        ...chatSpringProps,
      }}
    >
      {/* Invisible backdrop used for closing backdrop */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            top: 0,
            right: "100%",
            width: "100vw",
            height: "100vh",
            cursor: "pointer",
            zIndex: 998,
          }}
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          height: "100%",
          overflow: "visible",
        }}
      >
        <div
          style={{
            position: "absolute",
            bottom: "3.5rem",
            left: "-16em",
            filter: "grayscale(0.3)",
            textTransform: "uppercase",
            zIndex: 999,
            opacity: 0.9,
            display: "flex",
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
            onClick={() => setIsOpen(true)}
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
            onClick={() => (isOpen ? setIsOpen(false) : exit())}
          >
            Close
          </animated.button>
        </div>

        <div ref={avatarRef}>
          <div onClick={toggleChat} style={{ position: "relative" }}>
            <animated.div style={welcomeMessageSpringProps}>
              <Message
                message="Beep boop! Have a question about dean? Ask me!"
                direction="in"
                simulate
                delay={5000}
                style={{
                  position: "absolute",
                  bottom: "calc(100% + 1em)",
                  right: 50,
                  minWidth: 200,
                  transform: "translateX(-100%)",
                }}
              />
            </animated.div>
            <animated.div style={avatarSpringProps}>
              <Image
                src={ChatbotImageSrc}
                alt="Chatbot"
                className={styles.chatBotAvatar}
                style={{
                  viewTransitionName: "byte-avatar",
                  filter: "grayscale(0.3)",
                }}
              />
            </animated.div>
          </div>
        </div>
        <ChatProvider value={chatProviderValue}>
          <div
            id="chat-container"
            className={[
              styles.container,
              isRequesting ? styles.shimmer : "",
            ].join(" ")}
            onClick={handleBackdropClick}
            ref={messageContainerRef}
            style={{
              width: "max-content",
            }}
          >
            <div className={styles.main}>
              <Messages messages={filteredMessages} />
              <UserInput onSubmit={addUserMessage} />
            </div>
          </div>
        </ChatProvider>
      </div>
    </animated.div>
  );
};

export default FullScreenChat;
