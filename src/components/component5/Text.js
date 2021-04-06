import React from "react";
import './Text.css';

export const Text = (props) => {
    return (
        <div className='text'>
            <span>{props.title}</span>
            <p>{props.text1}</p>
            <p>{props.text2}</p>
        </div>
    )
}