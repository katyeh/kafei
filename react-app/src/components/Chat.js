import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let endPoint = "http://localhost:5000";
// connect with server using socket io
let socket = io.connect(`${endPoint}`);

const Chat = () => {
  const [messages, setMessages] = useState(["Hello And Welcome"]);
  const [message, setMessage] = useState("");

  // auto call when message length changes
  useEffect(() => {
    getMessages();
  }, [messages.length]);

  // This method will call when first time app render and
  // every time message length changes
  const getMessages = () => {
    socket.on("message", msg => {
      setMessages([...messages, msg]);
    });
  };

  const onChange = e => {
    setMessage(e.target.value);
  };

  // when send button pressed this method called
  const onClick = () => {
    if (message !== "") {
      // when btn clicked emit the message to server
      socket.emit("message", message);
      setMessage("")
    } else {
      alert("Please Add A Message");
    }
  };

  return (
    <div>
      {/* display each and every msg in the state as a for loop */}
      {messages.length > 0 &&
        messages.map(msg => (
          <div>
            <p>{msg}</p>
          </div>
        ))}
        <input value={message} name="message" onChange={e =>
          onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>
    </div>
  );
};

export default Chat;
