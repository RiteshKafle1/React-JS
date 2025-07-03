import React from "react";
import userContext from "../context/userContext";

const Login = () => {
  const [username, setUsername] = React.useState("");

  const [password, setPassword] = React.useState("");

  const { setUser } = React.useContext(userContext);

  function handleButtonClick(e) {
    e.preventDefault();
    setUser({ username, password });
  } 

  return (
    <div>
      <h4>Login</h4>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <br />
      <input
        type="text"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <br />
      <button type="submit" onClick={handleButtonClick}>
        Login
      </button>
    </div>
  );
};

export default Login;
