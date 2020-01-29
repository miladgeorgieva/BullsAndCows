import React from 'react';

function SingleHighscoreRow(props) {
    return (
        <div className={`single-row ${props.score.isLastGame && localStorage.getItem('isAuthenticated') === 'true' ? 'last-game' : ''}`}>
            <span className="text-highlight">{props.index + 1}</span>. <span className="text-bold">{props.score.username}</span> with
            <span className="text-bold"> {props.score.turns} {Number(props.score.turns) === 1 ? "turn" : "turns"}</span> and
            <span className="text-bold"> {props.score.jokers} {Number(props.score.jokers) === 1 ? "joker" : "jokers"} </span>
            based on {props.score.points} points
        </div>
    );
}

export default SingleHighscoreRow;