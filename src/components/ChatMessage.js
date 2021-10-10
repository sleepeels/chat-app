import { useContext } from "react";
import { AuthContext } from "../App";

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const { auth } = useContext(AuthContext);
  const messageClass = uid === auth.currentUser.uid ? "sent" : "recieved";

  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} />
      <p>{text}</p>
    </div>
  );
}

export default ChatMessage;
