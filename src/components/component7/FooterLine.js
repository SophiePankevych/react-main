import React from "react";
import './FooterLine.css';

export const FooterLine = (props) => {
    return (
        <div className='footerLine'>
            <div className='blue-block'>{props.action1}</div>
            <div className='blue-color'>{props.action2}</div>
        </div>
    )
}