import { sourceCodePro } from "../../fonts";
import Markdown from "markdown-to-jsx";

import styles from "./styles.module.css";

const Message = ({ message, direction }) => {
  return (
    <div
      className={[
        styles.message,
        sourceCodePro.className,
        direction === "out" ? styles.message__invert : "",
      ].join(" ")}
    >
      <Markdown>{message}</Markdown>
    </div>
  );
};

export default Message;
