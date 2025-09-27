import React, { useState } from "react";

const Login = () => {
  const [welcome, setWelcome] = useState(false);
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();

    if (
      (username === "username" || username === "user") &&
      password === "password"
    ) {
      setWelcome(true);
      setError("");
    } else {
      setWelcome(false);
      setError("Invalid username or password.");
    }
  };

  return (
    <div>
      <h1>Login Page</h1>
      {welcome ? (
        <h2>Welcome, user</h2>
      ) : (
        <form onSubmit={formSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <br />

          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <br />

          <button type="submit">Login</button>
          {error && <p style={{ color: "red" }}>{error}</p>}
        </form>
      )}
    </div>
  );
};

export default Login;
