import React, { Fragment } from 'react';
import SingleHighscoreRow from './SingleHighscoreBox';

function HighscoresBox(props) {
    let scores = JSON.parse(localStorage.getItem('scores'));
    // let userIsTopPlayer = true;
    // let myPoints = scores[scores.length - 1].points;

    function compare(a, b) {
        return a.points - b.points;
    }

    // todo: get last game of user and add bool to object
    scores[scores.length - 1]['isLastGame'] = 'true';
    let sortedAndSlicedArray = scores.sort(compare).slice(0, 25);

    return (
        <Fragment>
            {scores.length !== 0 ? <div id="highscores-box">
                <div className="single-row">
                    {sortedAndSlicedArray.sort(compare).map((score, index) => { return <SingleHighscoreRow key={index} score={score} index={index} /> })}
                </div>
            </div> : <div className="no-scores">No scores yet. Be the first one to conquer the game! :)</div>}
        </Fragment>
    );
}

export default HighscoresBox;