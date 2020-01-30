import React, { useEffect } from 'react';
import HighscoresBox from './HighscoresBox';

function Highscore(pops) {
    useEffect(() => {
        if (window.location.pathname === '/highscore') {
            window.onbeforeunload = undefined;
        }
    });

    return (
        <div id="game-holder">
            <h2 className="title">Top 25 highscores</h2>
            <HighscoresBox />
        </div>
    );
}
export default Highscore;