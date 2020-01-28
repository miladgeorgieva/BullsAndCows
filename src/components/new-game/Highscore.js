import React, {Component} from 'react';

class Highscore extends Component {
    render() {
        return (
            <div id="game-holder">
                <h2 className="title">Top 25 highscores</h2>
                <div id="highscores-box">
                    <div>Mila: 25 turns with 0 jokers</div>
                </div>
            </div>
        );
    }
}
export default Highscore;