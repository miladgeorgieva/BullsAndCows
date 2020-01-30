import React, { Component } from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import { withRouter } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

import Register from './components/user/Register';
import Homepage from './components/homepage/Homepage';
import NewGame from './components/new-game/NewGame';
import Highscore from './components/highscores/Highscore';
import PrivateRoute from './components/PrivateRoute';
import Login from './components/user/Login';
import Rules from './components/rules/Rules';

class App extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
        this.logout = this.logout.bind(this);
    }

    goBack() {
        this.props.history.goBack();
    }

    logout() {
        localStorage.removeItem("username");
        localStorage.removeItem("isAuthenticated");
        this.props.history.push('/');
        toast.success('You logged out successfully');
    }

    componentDidMount() {
        if (localStorage.getItem("users") === null) {
            localStorage.setItem("users", JSON.stringify([]));
        }

        if (localStorage.getItem("scores") === null) {
            localStorage.setItem("scores", JSON.stringify([]));
        }

        if (localStorage.getItem("turns") === null) {
            localStorage.setItem("turns", JSON.stringify([]));
        }
    }

    render() {
        return (
            <div className="container custom-container">
                <div className="row custom-row">
                    <div className="col-12 col-xl-8">
                        <h1 className="game-title">Bulls and Cows</h1>
                        {localStorage.getItem('isAuthenticated') === 'true' && this.props.location.pathname === "/" &&
                            <h2 className="title title-home-page">Hello, {localStorage.getItem('username')}</h2>}
                        <div className={`top-buttons-holder ${this.props.location.pathname === "/" ? 'is-on-homepage' : ''}`}>
                            {this.props.location.pathname !== "/" &&
                                <button className="go-back-btn" onClick={this.goBack}>
                                    <FontAwesomeIcon icon={faChevronLeft} className="go-back-icon" />
                                    Go back
                                    </button>}
                            {localStorage.getItem("isAuthenticated") === "true" &&
                                <button className='logout-btn' onClick={this.logout}>
                                    <FontAwesomeIcon icon={faSignOutAlt} className="logout-icon" />
                                    Logout
                                    </button>}
                        </div>
                        {this.props.location.pathname === "/" && <Link to="/rules" className="game-rules">Game rules</Link>}
                        <Switch>
                            <Route path="/" exact render={() => <Homepage />} />
                            <PrivateRoute path="/new-game" exact > <NewGame /> </PrivateRoute>
                            <Route path="/highscore" exact render={() => <Highscore />} />
                            <Route path="/register" exact render={() => <Register />} />
                            <Route path="/login" exact render={() => <Login />} />
                            <Route path="/rules" exact render={() => <Rules />} />
                            <Route render={() => <Redirect to="/" />} />
                        </Switch>
                        <ToastContainer />
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(App);