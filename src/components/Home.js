import { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link } from 'react-router-dom';

const Home = () => {
  const {user, setUser} = useContext(UserContext);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          {user}
        </div>
        <li>
          <Link to="/login">login-page</Link>
        </li>
        <li>
        <Link to="/chatroom">chat-page</Link>
        </li>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default Home;
