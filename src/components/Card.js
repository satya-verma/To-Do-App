import React from 'react';
import './Card.css';

const Card = ({ text, id, itemdelete }) => {
    return (
        <div className="card db br2 pa2 ma3 shadow-3 ">
            <div>
                <input type="checkbox" id={id} className="ma2" />
                <label htmlFor={id}> {text}</label>
            </div>
            <button className="delete tc ma1 link pv1 ph2 dib white" onClick={() => itemdelete(id)}>
                &#10007;</button>
        </div>
    );
}
export default Card;