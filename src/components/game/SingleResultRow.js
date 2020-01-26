import React from 'react';

function SingleResultRow(props) {
    // console.log(props);

    return (
        <div className="single-row">
            Your number is <span className="given-number">{props.playerResults.number}</span>,
            which has <span className="count-bulls-cows"> {props.playerResults.bulls} bulls </span>
            and <span className="count-bulls-cows">{props.playerResults.cows} cows</span>
        </div>
    );
}

export default SingleResultRow;