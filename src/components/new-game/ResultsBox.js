import React from 'react';
import SingleResultRow from './SingleResultRow';

function resultsBox(props) {
    return (
        <div id="results-box">
            <div className="single-row">
                {props.playerResults.map((playerResult, index) => { return <SingleResultRow key={playerResult.turnNumber} playerResults={playerResult} /> }).reverse()}
            </div>
        </div>
    );
}

export default resultsBox;