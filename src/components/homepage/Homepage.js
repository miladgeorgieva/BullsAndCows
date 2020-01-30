import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function Homepage() {
    return (
        <Fragment>
            <div className="row mt-3 justify-content-center">
                <div className="col-12 col-sm-6">
                    <Link to="/new-game" className="btn primary-button new-game">Start new game</Link>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-sm-6">
                    <Link to="/highscore" className="btn primary-button top-scores">Show highscore</Link>
                </div>
            </div>
        </Fragment>
    );
}

export default Homepage;