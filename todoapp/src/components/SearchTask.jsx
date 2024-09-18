import React, { useState } from "react";
import InputField from "./InputField";

const SearchTask = ({ onSearch, message }) => {
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        onSearch(title);
    };

    return (
        <div className="form-section">
            <h2>Search Task</h2>
            <form onSubmit={handleSubmit}>
                <InputField
                    id="title"
                    label="Task Title"
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                <button type="submit">Search Task</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SearchTask;
