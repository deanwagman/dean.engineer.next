"use client";

import { useState, useEffect } from "react";
import Container from "./Container";
import styles from "./styles.module.css";
import { useBackdropFilter } from "../../contexts/backdrop-filter";

const FullScreenChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setBlur, setBrightness } = useBackdropFilter();

  const onEscape = (event) => {
    if (event.key === "Escape" && isOpen) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", onEscape);
    }
    return () => document.removeEventListener("keydown", onEscape);
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      setBlur("30");
      setBrightness(50);
    } else {
      setBlur(0);
      setBrightness(100);
    }

    return () => setBlur(3);
  }, [isOpen]);

  const toggleChat = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div>
      {/* Close Button */}
      {isOpen ? (
        <button className={styles.closeButton} onClick={toggleChat}>
          &times;
        </button>
      ) : null}

      {/* Launch Button */}
      {!isOpen ? (
        <button onClick={toggleChat} className={styles.chatBotLaunchButton}>
          🤖
        </button>
      ) : null}

      {/* Chat Container */}
      {isOpen ? <Container closeChat={() => setIsOpen(false)} /> : null}
    </div>
  );
};

export default FullScreenChat;
