import { createContext, useContext } from "react";

export const ChatContext = createContext();

export const ChatProvider = ChatContext.Provider;
export const ChatConsumer = ChatContext.Consumer;

export const useChat = () => useContext(ChatContext);

export default ChatContext;
