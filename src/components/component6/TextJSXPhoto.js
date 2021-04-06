import React from "react";
import './TextJSXPhoto.css';

export const TextJSXPhoto = (props) => {
    return(
        <div className='text-jsx-photo'>
            <div className='flex'>
                <h2>{props.title}</h2>
                <p>{props.info1}</p>
                <p>{props.info2}</p>
            </div>
            <img src={props.image} alt="jsx"/>
        </div>
    )
}