import { useState } from "react";
import "./ChatForm.style.css";

export const ChatForm = ({ onSubmit }) => {
  const [state, setState] = useState({
    message: "",
  });

  const handleChange = ({ target }) => {
    const { name, value } = target;

    setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({
      message: "",
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="write..."
        autoFocus="true"
        name="message"
        value={state.message}
        onChange={handleChange}
      />
      <button type="submit">Send</button>
    </form>
  );
};
