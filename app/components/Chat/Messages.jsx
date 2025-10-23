import Message from "./Message";
import { useEffect, useRef } from "react";

import styles from "./styles.module.css";

const Messages = ({ messages = [] }) => {
  const messagesContainerRef = useRef(null);

  useEffect(() => {
    const messagesContainer = messagesContainerRef.current;

    messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [messages]);

  return (
    <div className={styles.messages} ref={messagesContainerRef}>
      {messages.map(({ content, role, id }) => {
        return (
          <Message
            key={id}
            message={content}
            direction={role === "assistant" ? "in" : "out"}
          />
        );
      })}
    </div>
  );
};

export default Messages;
