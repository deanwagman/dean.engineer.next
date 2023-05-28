import { sourceCodePro } from "../../fonts";

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
      {message}
    </div>
  );
};

export default Message;
