import React, { Component } from 'react';
import HighscoresBox from './HighscoresBox';

function Highscore(props) {
        return (
            <div id="game-holder">
                <h2 className="title">Top 25 highscores</h2>
                <HighscoresBox/>
            </div>
        );
}
export default Highscore;