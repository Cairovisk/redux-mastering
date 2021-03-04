import './Card.css'
import React from 'react'

function getColor(props) {
    if(props.red) return "Red";
    if(props.blue) return "Blue";
    if(props.yellow) return "Yellow";
    if(props.brown) return "Brown";
    return "";
}

const Card = props => {
    return (
        <div className={`Card ${getColor(props)}`}>
            <div className="Header">
                <span className="Title">{props.title}</span>
            </div>
            <div className="Body">
                {props.children}
            </div>
        </div>
    )
}

export default Card

