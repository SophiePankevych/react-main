import React from "react";
import './Main.css';

export const Main = (props) => {
    return(
        <div className='main'>
            <h1>{props.name}</h1>
            <p>{props.text}</p>
            <a href="#">{props.a1Text}</a>
            <a href="#">{props.aText}</a>
        </div>
    )
}