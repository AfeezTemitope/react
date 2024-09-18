import React from "react";

const GetTasks = ({ tasks, message }) => {
    return (
        <div className="tasks-display">
            <h2>Your Tasks</h2>
            <ul>
                {tasks.map((task) => (
                    <li key={task.task_id}>
                        <strong>{task.title}</strong>: {task.description}
                    </li>
                ))}
            </ul>
            {message && <p>{message}</p>}
        </div>
    );
};

export default GetTasks;
