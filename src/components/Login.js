// const Login = () => {
//     return (

//      );
// }

// export default Login;

import React, { useContext, useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../Login.css";
import { UserContext } from "../UserContext";
import { Link, useHistory } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();
  function validateForm() {
    // return email.length > 0 && password.length > 0;
    return email.length > 0;
  }

  function handleSubmit(event) {
    event.preventDefault();
  }

  const loginHandler = () => {
    setUser(email);
    history.push("/chatroom");
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </Form.Group>
        {/* <Form.Group size="lg" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </Form.Group> */}
        <div>{user}</div>
        <Button onClick={loginHandler}>
          Chatroom login
        </Button>
        <Button block size="lg" type="submit" disabled={!validateForm()}>
          Login
        </Button>
      </Form>
    </div>
  );
}
