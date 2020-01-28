import React from 'react';

function SingleResultRow(props) {
    return (
        <div className="single-row">
            {props.playerResults.turnNumber}:
            Your number is <span className="given-number">{props.playerResults.number}</span>,
    which has <span className="count-bulls-cows"> {props.playerResults.bulls} {Number(props.playerResults.bulls) === 1 ? "bull" : "bulls"} </span>
            and <span className="count-bulls-cows">{props.playerResults.cows} {Number(props.playerResults.cows) === 1 ? "cow" : "cows"}</span>
        </div>
    );
}

export default SingleResultRow;