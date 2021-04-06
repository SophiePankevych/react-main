import React from 'react';
import './UserCard.css';


export const UserCard = (props) => {
    return (
        <div className='card'>
            <h1>{props.username ?? 'N/A'}</h1>
            <h3>{props.info ?? 'N/I'}</h3>
            <img src={props.image} alt="user-info"/>
        </div>
    )
}