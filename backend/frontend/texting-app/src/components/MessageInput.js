import { useState } from "react";
import { TextField, Button } from "@mui/material";

const MessageInput = ({ onSend }) => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim() !== "") {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
      <TextField
        fullWidth
        label="Type a message..."
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleSend}>
        Send
      </Button>
    </div>
  );
};

export default MessageInput;
