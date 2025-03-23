import { useState } from "react";
import { Container, Typography } from "@mui/material";
import MessageInput from "../components/MessageInput";
import MessageList from "../components/MessageList";
import { sendMessage } from "../api";

const Chat = () => {
  const [messages, setMessages] = useState([]);

  const handleSendMessage = async (message) => {
    setMessages((prev) => [...prev, `You: ${message}`]);
    
    const response = await sendMessage(message);
    setMessages((prev) => [...prev, `AI: ${response.result}`]);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" gutterBottom>
        Texting App
      </Typography>
      <MessageList messages={messages} />
      <MessageInput onSend={handleSendMessage} />
    </Container>
  );
};

export default Chat;
