import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from 'react-router-dom';

function LoginForm() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/login", { email, password })
      .then((response) => {
        console.log(response.data);
        localStorage.setItem("token", response.data.token);
        navigate('/profile');
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form style={{ border: "1px solid black", padding: "20px" }} onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <button type="submit">Login</button>
        <br></br>
        <p>New User:<span><Link to="/signup">register here</Link></span></p>
      </form>
    </div>
  );
}

export default LoginForm;
