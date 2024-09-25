import React from "react";
import Home from "./pages/HomePage";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Login from "./pages/Login";
import './App.css';

function App() {
  return (
    <Router>
    <Routes>
      <Route path="/" Component={<Home/>} />
      {/* <Route path="/login" Component={<Login/>} /> */}
    </Routes>
  </Router>
  );
}

export default App;
