import React from "react";
import './InfoCard.css';

export const InfoCard = (props) => {
    return (
        <div className='infoCard'>
            <div className='img-descr'>
                <p>{props.description}</p>
                <img src={props.image} alt="cookies"/>
            </div>
            <a href="#">{props.ingredients}</a>
            <a href="#">{props.recipe}</a>
        </div>
    )
}