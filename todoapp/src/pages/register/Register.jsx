import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Todo from "../../asset/todo.png";
import Form from "../../components/RegistrationForm";
import "../style/register.css"
import NavBar from "../../components/NavBar";


const Register = () => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (username, password) => {
    try {
      const response = await fetch("http://localhost:5000/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (response.ok) {
        setMessage("Registration successful! Please login to continue.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      } else {
        setMessage(data.message || "Something went wrong!");
      }
    } catch (e) {
      setMessage("An error occurred: " + e.message);
    }
  };

  return (
      <div>
      <NavBar/>
    <div className="container">
      <div className="image-section">
        <img src={Todo} alt="todo" />
      </div>
      <div className="form-section">
        <Form onSubmit={handleSubmit} message={message} />
        {message && <p className="message">{message}</p>}
      </div>
    </div>
        </div>
  );
};

export default Register;
