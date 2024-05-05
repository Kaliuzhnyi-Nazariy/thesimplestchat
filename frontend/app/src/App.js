import io from "socket.io-client";
import { nanoid } from "nanoid";

import "./App.css";
import "./app-style.css";
import { Chat } from "./components/chat/Chat";
import { ChatForm } from "./components/ChatForm/ChatForm";

import SigninForm from "./components/SigninForm/SigninForm";
import { useCallback, useEffect, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [name, setName] = useState("");
  const [messages, setMessage] = useState([]);

  const addName = useCallback(({ name }) => setName(name), []);

  useEffect(() => {
    socket.on("chat-message", (message) => {
      setMessage((prevMessage) => {
        const newMessage = {
          id: nanoid(),
          type: "user",
          message,
        };

        return [...prevMessage, newMessage];
      });
    });
  }, []);

  const addMessage = useCallback(({ message }) => {
    setMessage((prevMessage) => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        message,
      };

      return [...prevMessage, newMessage];
    });

    socket.emit("chat-message", message);
  }, []);

  return (
    <div className="app-style">
      {!name && <SigninForm onSubmit={addName} />}
      {name && (
        <div className="app-cont">
          <h2>{name}'s chat</h2>
          <div className="try">
            <Chat items={messages} />
            <ChatForm onSubmit={addMessage} />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
