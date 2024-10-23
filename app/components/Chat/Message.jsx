import React, { useEffect, useState } from "react";
import { sourceCodePro } from "../../fonts";
import Markdown from "markdown-to-jsx";

import styles from "./styles.module.css";

const Message = ({ message, direction, simulate, style }) => {
  // Simulate typing effect, as if the message is being typed
  const [value, setValue] = useState(simulate ? "" : message);

  useEffect(() => {
    if (!simulate) {
      return;
    }

    let i = 0;
    const interval = setInterval(() => {
      // Subtle random delay to simulate human typing
      if (Math.random() < 0.3) {
        return;
      }

      setValue((prev) => prev + message[i]);
      i++;

      if (i === message.length) {
        clearInterval(interval);
      }
    }, 60);

    return () => clearInterval(interval);
  }, [message, simulate]);

  return (
    <div
      className={[
        styles.message,
        sourceCodePro.className,
        direction === "out" ? styles.message__invert : "",
      ].join(" ")}
      style={style}
    >
      <Markdown>{value}</Markdown>
    </div>
  );
};

export default Message;
