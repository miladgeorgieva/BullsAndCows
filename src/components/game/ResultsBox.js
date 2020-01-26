import React from 'react';
import SingleResultRow from './SingleResultRow';

function resultsBox(props) {
    return (
        <div id="results-box">
            <div className="single-row">
                {props.playerResults.map((playerResult, index) => { return <SingleResultRow key={index} playerResults={playerResult} /> })}
            </div>
        </div>
    );
}

export default resultsBox;