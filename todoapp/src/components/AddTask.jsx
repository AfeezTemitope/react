import React, { useState } from 'react';
import InputField from "./InputField";

const AddTask = ({ onSubmit, message }) => {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({title, description});
    };

    return (
        <div className="form-section">
            <h2>Add Task</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    id="title"
                    label="Task Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <InputField
                    id="description"
                    label="Task Description"
                    type="text"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <button type="submit">Add Task</button>
            </form>
            {message &&(
                <p>{typeof message === 'object' ? message.message : message}</p>
            )}
        </div>
    )

}

export default AddTask;