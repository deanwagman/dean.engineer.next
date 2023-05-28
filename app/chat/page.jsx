import { Suspense } from "react";
import Chatbot from "../components/Chat";

const ChatPage = () => {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Chatbot />
      </Suspense>
    </div>
  );
};

export default ChatPage;
