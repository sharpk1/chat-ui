import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Chatroom = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <>
      {user}
      <div class="message-container">
      <input
        class="form-control form-control-sm"
        type="text"
        placeholder="Type your message here."
      />
      <button type="button" class="btn btn-primary">
        Send
      </button>
      </div>
      
    </>
  );
};

export default Chatroom;
