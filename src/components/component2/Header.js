import React from "react";
import './Header.css';

export const Header = (props) => {
    return (
        <div className='header'>
            <h2>{props.mainName ?? 'N/A'}</h2>
            <div>{props.name1}</div>
            <div>{props.name2}</div>
            <div>{props.name3}</div>
            <div>{props.name4}</div>
            <input type="text" placeholder='Search...'/>
            <div>{props.name5}</div>
            <div>{props.name6}</div>
            <div>{props.name7}</div>
        </div>
    )
}