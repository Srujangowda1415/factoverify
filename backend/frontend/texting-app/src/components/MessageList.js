import { Card, CardContent, Typography } from "@mui/material";

const MessageList = ({ messages }) => {
  return (
    <div style={{ marginTop: "10px" }}>
      {messages.map((msg, index) => (
        <Card key={index} style={{ marginBottom: "5px" }}>
          <CardContent>
            <Typography>{msg}</Typography>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default MessageList;
