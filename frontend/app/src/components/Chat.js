import "./Chat.style.css";

export const Chat = ({ items }) => {
  console.log("items: ", items);
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
  return (
    <div
      style={{
        height: "250px",
        width: "80%",
        display: "inline-grid",
        justifySelf: "center",
        backgroundColor: "lightgray",
      }}
      className="container"
    >
      {elements}
    </div>
  );
};
