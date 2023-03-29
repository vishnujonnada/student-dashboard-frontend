import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';


function SignupForm() {
    const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [rollNo, setRollNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    axios.post("http://localhost:4000/register", {
      fullName,
      email,
      mobile,
      rollNo,
      password,
      confirmpassword
    })
      .then((response) => {
        console.log(response.data);
        // Do something with the response
        alert("User registered Succesfully")
        navigate('/');
      })
      .catch((error) => {
        alert("User Already Exists\n or\n Invalid User")
        // Do something with the error
      });
  };

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100vh" }}>
      <form style={{ border: "1px solid black", padding: "20px" }} onSubmit={handleSubmit}>
        <h2>Signup</h2>
        <div style={{ marginBottom: "10px" }}>
          <label>Full Name:</label>
          <input type="text" placeholder="Enter full name" value={fullName} onChange={(event) => setFullName(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Email:</label>
          <input type="email" placeholder="Enter email" value={email} onChange={(event) => setEmail(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Mobile Number:</label>
          <input type="tel" placeholder="Enter mobile number" value={mobile} onChange={(event) => setMobile(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Roll Number:</label>
          <input type="text" placeholder="Enter roll number" value={rollNo} onChange={(event) => setRollNo(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Password:</label>
          <input type="password" placeholder="Enter password" value={password} onChange={(event) => setPassword(event.target.value)} />
        </div>
        <div style={{ marginBottom: "10px" }}>
          <label>Confirm Password:</label>
          <input type="password" placeholder="Enter password again" value={confirmpassword} onChange={(event) => setConfirmPassword(event.target.value)} />
        </div>
        <button type="submit">Signup</button>
        <p>Already Registered:<span><Link to="/login">Login here</Link></span></p>
      </form>
    </div>
  );
}

export default SignupForm;
