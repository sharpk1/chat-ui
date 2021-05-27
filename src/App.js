import "./App.css";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import { UserContext } from "./UserContext";
import { useMemo, useState } from "react";
import Chatroom from "./components/Chatroom";

function App() {
  const [user, setUser] = useState(null);

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <>
      <Router>
        <li>
          <Link to="/">home-page</Link>
        </li>
        <li>
          <Link to="/login">login-page</Link>
        </li>
        <li>
          <Link to="/chatroom">chat-page</Link>
        </li>
        <Switch>
          <UserContext.Provider value={value}>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/chatroom" component={Chatroom} />
          </UserContext.Provider>
        </Switch>
      </Router>
    </>
  );
}

export default App;
