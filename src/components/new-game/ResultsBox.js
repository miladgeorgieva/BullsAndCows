import React from 'react';
import SingleResultRow from './SingleResultRow';

function ResultsBox(props) {
    return (
        <div id="results-box">
            {props.playerResults.map((playerResult, index) => { return <SingleResultRow key={playerResult.turnNumber} playerResults={playerResult} /> }).reverse()}
        </div>
    );
}

export default ResultsBox;