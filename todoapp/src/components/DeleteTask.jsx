import React, { useState } from "react";
import InputField from "./InputField";

const DeleteTask = ({ onSubmit, message }) => {
    const [taskId, setTaskId] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(taskId);
    };

    return (
        <div className="form-section">
            <h2>Delete Task</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    id="taskId"
                    label="Task ID"
                    type="text"
                    value={taskId}
                    onChange={(e) => setTaskId(e.target.value)}
                    required
                />
                <button type="submit">Delete Task</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};


export default DeleteTask;