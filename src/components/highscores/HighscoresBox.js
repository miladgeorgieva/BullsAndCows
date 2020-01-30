import React, { Fragment } from 'react';
import SingleHighscoreRow from './SingleHighscoreBox';

function HighscoresBox() {
    let scores = JSON.parse(localStorage.getItem('scores'));

    function compare(a, b) {
        return a.points - b.points;
    }

    let currentUserResults = scores.filter(result => result.username === localStorage.username);

    let sortedAndSlicedArray = scores.sort(compare).slice(0, 25);

    // Returns max timestamp
    function getUserMostRecentGame() {
        return currentUserResults.map((e) => { return e }).sort().reverse()[0];
    }

    let userMostRecentGame = getUserMostRecentGame();

    if (localStorage.getItem('isAuthenticated') === 'true') {
        if (userMostRecentGame.username === localStorage.getItem('username')) {
            userMostRecentGame['isLastGame'] = 'true';
        }
    }

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