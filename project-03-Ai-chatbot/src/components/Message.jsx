import logo from "../assets/1.jpg"
const Message = ({ message }) => {
  return (
    <div id={message.id} className={`message ${message.role}-message ${message.loading ? "loading" : ""} ${message.error ? "error" : ""}`}>
      {message.role === "bot" && <img className="avatar" src={logo} alt="Bot Avatar" />}
      <p className="text">{message.content}</p>
    </div>
  );
};
export default Message;