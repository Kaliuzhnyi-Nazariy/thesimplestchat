import io from "socket.io-client";
import { nanoid } from "nanoid";

import "./App.css";
import { Chat } from "./components/Chat";
import { ChatForm } from "./components/ChatForm";

import SigninForm from "./components/SigninForm";
import { useCallback, useState } from "react";

const socket = io.connect("http://localhost:3001");

function App() {
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  const addName = useCallback(({ name }) => setName(name), []);

  // const addMessage = useCallback(({ message }) => {
  //   setMessage((prevMessage) => {
  //     const newMessage = {
  //       id: nanoid(),
  //       type: "you",
  //       message,
  //     };

  //     console.log(newMessage);

  //     return [newMessage, ...prevMessage];
  //   });
  // }, []);

  const addMessage = useCallback(({ message }) => {
    setMessage((prevMessage) => {
      const newMessage = {
        id: nanoid(),
        type: "you",
        message,
      };

      console.log("newMessage: ", newMessage);

      return [newMessage, ...prevMessage];
    });
  }, []);

  return (
    <div className="App">
      {!name && <SigninForm onSubmit={addName} />}
      {name && (
        <>
          <h2>Hi, {name}!</h2>
          <Chat items={message} />
          <ChatForm onSubmit={addMessage} />
        </>
      )}
    </div>
  );
}

export default App;
