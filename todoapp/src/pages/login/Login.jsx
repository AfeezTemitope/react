import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Form from "../../components/RegistrationForm";
import SignIn from "../../asset/signIn.png";
import "../style/login.css"
import NavBar from "../../components/NavBar";


const Login = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Login successful!");
        localStorage.setItem("jwtToken", data.access_token);
        setTimeout(() => {
          navigate("/TaskManager");
        }, 2000);
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (e) {
      setMessage("An error occurred: " + e.message);
    }
  };

  return (
      <div><NavBar/>
    <div className="container">
      <div className="image-section">
        <img src={SignIn} alt="todo" />
      </div>
      <div className="form-section">
        <Form onSubmit={handleSubmit} message={message} />
        {message && <p className="message">{message}</p>}
      </div>
    </div>
          </div>
  );
};

export default Login;