import { useState, useEffect } from'react';
import { useNavigate } from'react-router-dom';
import '../style/dashboard.css';
import NavBar from "../../components/NavBar";

const Dashboard = () => {

    const navigate = useNavigate();
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
        setTodos(storedTodos);
    }, []);
    return (
        <div><NavBar/>
        <div className='dashboard'>

            <h1>wetin i do sk todoapp</h1>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo.text}</li>
                ))}
            </ul>

            <button onClick={() => navigate('/register')}>Register</button>
            <button onClick={() => navigate('/login')}>Login</button>

            <p>nothing to see here, just me doing something sha...<br></br>And i know u would want to click but any which ways satisfy your curiosity </p>
            </div>
        </div>

    )

            

}

export default Dashboard;