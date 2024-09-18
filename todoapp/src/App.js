import logo from './logo.svg';
import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard  from './pages/dashBoard/Dashboard';
import Login from './pages/login/Login';
import Register from './pages/register/Register';
import TaskManager from "./pages/TaskManager/Taskmanager";


function App() {
  return (
<Router>
  <Routes>
    <Route path="/" element={<Dashboard />} />
    <Route path="/login" element={<Login />} /> 
    <Route path="/register" element={<Register />} />
    <Route path="/taskmanager" element={<TaskManager/>} />
  </Routes>
</Router>
  );
}

export default App;
