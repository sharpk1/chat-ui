import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

const Home = () => {
  const { user, setUser } = useContext(UserContext);
  return (
    <div className="App">
      <header>
        <div>{user}</div>
        <li>
          <Link to="/login">login-page</Link>
        </li>
        <li>
          <Link to="/chatroom">chat-page</Link>
        </li>
      </header>
    </div>
  );
};

export default Home;
