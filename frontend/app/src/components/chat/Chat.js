import { ChatForm } from "../ChatForm/ChatForm";
import "./Chat.style.css";

export const Chat = ({ items }) => {
  let elements;
  if (items.length !== 0) {
    elements = items.map(({ id, type, message }) => {
      const className = type === "you" ? "yourMes" : "userMes";
      return (
        <p key={id} className={className}>
          {message}
        </p>
      );
    });
  }
  return <div className="container">{elements}</div>;
};
