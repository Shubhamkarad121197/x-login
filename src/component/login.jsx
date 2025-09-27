import React, { useState } from 'react';

const Login = () => {
    const [welcome, setWelcome] = useState(false);
    const [error, setError] = useState(""); 

    const formSubmit = (e) => {
        e.preventDefault();
        let username = e.target[0].value;
        let password = e.target[1].value;
        if (username === "username" && password === "password") {
            setWelcome(true);
            setError(""); 
        } else {
            setWelcome(false);
            setError("Invalid username or password.");
        }
    }

    return (
        <div>
            <h1>Login Page</h1>
            {welcome ? (
                <h2>Welcome User</h2>
            ) : (
                <form onSubmit={formSubmit}>
                    <label htmlFor="Username">Username</label>
                    <input type="text" placeholder="Username" required />
                    <br />
                    <label htmlFor="Password">Password</label>
                    <input type="password" placeholder="Password" required />
                    <br />
                    <button type="submit">Login</button>
                    {error && <p style={{ color: "red" }}>{error}</p>}
                </form>
            )}
        </div>
    );
}
export default Login;