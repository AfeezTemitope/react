import React, { useState, useEffect } from 'react';
import AddTask from "../../components/AddTask";
import NavBar from "../../components/NavBar";
import DeleteTask from "../../components/DeleteTask";
import GetTasks from "../../components/GetTask";
import "../style/TaskManager.css";
import SearchTask from "../../components/SearchTask";

const TaskManager = () => {
    const [tasks, setTasks] = useState([]);
    const [message, setMessage] = useState("");

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const token = localStorage.getItem("jwtToken");

            const response = await fetch("http://127.0.0.1:5000/get_task", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });
            const data = await response.json();
            if (response.ok) {
                setTasks(data.tasks);
            } else {
                setMessage('Failed to fetch the tasks');
            }
        } catch (error) {
            setMessage("Error fetching tasks");
        }
    };

    const handleAddTask = async (title, description) => {
        try {
            const token = localStorage.getItem("jwtToken");

            const response = await fetch("http://127.0.0.1:5000/add_task", {
                method: "POST",
                credentials: 'include',
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({title, description})
            });

            const result = await response.json();

            if (response.ok) {
                setMessage("Successfully added task");
                await fetchTasks();
            } else {
                setMessage(`Failed to add task: ${result.message || response.statusText}`);
            }
        } catch (error) {
            setMessage("Error adding the task");
        }
    };

    const handleDeleteTask = async (taskId) => {
        try {
            const token = localStorage.getItem("jwtToken");

            const response = await fetch(`http://127.0.0.1:5000/delete_task`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                },
                body: JSON.stringify({task_id: taskId})
            });
            if (response.ok) {
                setMessage("Task deleted successfully");
                await fetchTasks();
            } else {
                const errorData = await response.json();
                setMessage(`Failed to delete task: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            setMessage("Error deleting task");
        }
    };
    const handleSearchTask = async (title) => {
        try {
            const token = localStorage.getItem("jwtToken");

            const response = await fetch(`http://127.0.0.1:5000/search_task?title=${title}`, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Authorization": `Bearer ${token}`
                }
            });

            if (response.ok) {
                const data = await response.json();
                setTasks(data.tasks);
                setMessage("Tasks fetched successfully");
            } else {
                const errorData = await response.json();
                setMessage(`Failed to fetch tasks: ${errorData.message || response.statusText}`);
            }
        } catch (error) {
            setMessage("Error fetching tasks");
        }
    };

    return (
        <div>
            <NavBar/>
            <SearchTask onSearch={handleSearchTask} message={message} />
            <div className="task-manager">
                <AddTask onSubmit={handleAddTask} message={message}/>
                <DeleteTask onSubmit={handleDeleteTask} message={message}/>
                <GetTasks tasks={tasks} message={message}/>
            </div>
        </div>
    )
}

export default TaskManager;
