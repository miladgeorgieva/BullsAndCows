import React from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <div className="row justify-content-center">
            <div className="col-12 col-sm-8">
                <Link to="/new-game" className="btn primary-button new-game">Start new game</Link>
            </div>
            <div className="col-12 col-sm-8">
                <Link to="/highscore" className="btn primary-button top-scores">Show highscore</Link>
            </div>
        </div>
    );
}

export default Homepage;