import "./Chat.style.css";

export const Chat = ({ items }) => {
  let elements;
  console.log(items);
  if (items.length !== 0) {
    elements = items.map(({ id, type, message, name }) => {
      console.log(name);
      const className = type === "you" ? "yourMes" : "userMes";
      return (
        <p key={id} className={className}>
          {message}
          {type === "you" ? (
            <span className="nameOfMes">you</span>
          ) : (
            <span className="nameOfMes">{name}</span>
          )}
        </p>
      );
    });
  }
  return <div className="container">{elements}</div>;
};
