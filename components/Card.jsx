import React from "react";

const Card = (props) => {
    const handleFlipCard = () => {
        props.checkIsFlipped(!props.isFlipped);
    }

    return (
        <div className={`card ${props.isFlipped ? "flipped" : ""}`} onClick={handleFlipCard} style={{backgroundColor: props.color}}>
            <div className="card-inner">
                <div className="front">
                    <p>{props.question}</p>
                </div>
                <div className="back">
                    <img className='answer' src={props.answer}></img>
                </div>
            </div>
        </div>
    )
}

export default Card;