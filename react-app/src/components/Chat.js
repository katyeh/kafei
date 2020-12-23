import React, { useState, useEffect } from "react";
import io from "socket.io-client";

let endPoint = "http://localhost:5000";
// connect with server using socket io
let socket = io.connect(`${endPoint}`);
let socket_messages = io(`${endPoint}/messages`)

socket_messages.on('from flask', function(msg) {
  alert(msg)
});

socket.on('server originated', function(msg) {
  alert(msg)
});

let private_socket = io(`${endPoint}/private`)

private_socket.on('new_private_message', function(msg) {
  alert(msg);
});

const Chat = () => {
  const [messages, setMessages] = useState(["Hello And Welcome"]);
  const [message, setMessage] = useState("");
  const [username, setUsername] = useState("");

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

  const onUsername = e => {
    setUsername(e.target.value);
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

  const onUsernameClick = () => {
    if (username !== "") {
      private_socket.emit('username', username);
      setUsername("")
    } else {
      alert ("Please add a username")
    }
  }

  const sendPrivateMessage = () => {
    // let recipient = ${username}
    // let message_to_send = ${message}
    private_socket.emit('private_message', {'username' : username, 'message' : message})
  }

  return (
    <div>
        <input value={username} name="username" onChange={e => onUsername(e)} />
        <button onClick={() => onUsernameClick()}>Send Username</button>
        <input value={message} name="message" onChange={e =>
          onChange(e)} />
        <button onClick={() => onClick()}>Send Message</button>

        <br />
        Send To: <input value={username} name="username" onChange={e =>
          onUsername(e)} />
        Message: <input value={message} name="message" onChange={e =>
          onChange(e)} />
        <button onClick={() => sendPrivateMessage()}>Send</button>
    </div>
  );
};

export default Chat;
