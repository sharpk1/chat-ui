import React, { useContext } from "react";
import { UserContext } from "../UserContext";

const Chatroom = () => {
  const { user, setUser } = useContext(UserContext);
  return <>{user}</>;
};

export default Chatroom;
