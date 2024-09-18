import React from "react";
import "./style/InputField.css"

const InputField = (props) => {
    return (
        <div className="input_field">
            <label htmlFor={props.id}>{props.label}</label>
            <input 
                type={props.type}
                id={props.id} 
                value={props.value} 
                placeholder={props.placeholder} 
                onChange={props.onChange} 
            />
        </div>
    );
};

export default InputField;
