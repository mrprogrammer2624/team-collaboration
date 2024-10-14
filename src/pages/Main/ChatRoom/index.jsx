import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Input, Button, List, Card } from "antd";
import io from "socket.io-client";
import { addMessage } from "@/Reducer/chatSlice";

const socket = io(import.meta.env.VITE_SOCKET_URL);

export const ChatRoom = () => {
  const [message, setMessage] = useState("");
  const dispatch = useDispatch();
  const { messages, activeChannel } = useSelector((state) => state.chat);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    socket.on("message", (msg) => {
      dispatch(addMessage(msg));
    });

    return () => {
      socket.off("message");
    };
  }, [dispatch]);

  const sendMessage = () => {
    if (message.trim() && activeChannel) {
      const newMessage = {
        content: message,
        sender: user.name,
        channel: activeChannel,
        timestamp: new Date().toISOString(),
      };
      socket.emit("sendMessage", newMessage);
      setMessage("");
    }
  };

  return (
    <div className="chat-room">
      <h2>Chat Room: {activeChannel}</h2>
      <Card>
        <List
          dataSource={messages}
          renderItem={(msg) => (
            <List.Item>
              <List.Item.Meta title={msg.sender} description={msg.content} />
              <div>{new Date(msg.timestamp).toLocaleTimeString()}</div>
            </List.Item>
          )}
        />
      </Card>
      <div className="chat-input">
        <Input
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onPressEnter={sendMessage}
          placeholder="Type a message..."
        />
        <Button onClick={sendMessage} type="primary">
          Send
        </Button>
      </div>
    </div>
  );
};
