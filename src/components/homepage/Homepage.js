import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="buttons">
            <Link to="/new-game" className="btn primary-button new-game">Start new game</Link>
            <Link to="/highscore" className="btn primary-button top-scores">Show highscore</Link>
        </div>
    );
}

export default Homepage;