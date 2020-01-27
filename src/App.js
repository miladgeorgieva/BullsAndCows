import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import Register from './components/user/Register';
import Homepage from './components/homepage/Homepage';
import NewGame from './components/game/NewGame';
import Highscore from './components/game/Highscore';

class App extends Component {
    render() {
        return (
            <Router>
                <div id="body-container">
                    <div id="game">
                        <div id="game-inner-wrapper">
                            <h1 className="game-title">Bulls and Cows</h1>
                            <Switch>
                                <Route path="/" exact render={() => <Homepage />} />
                                <Route path="/new-game" exact render={() => <NewGame />} />
                                <Route path="/highscore" exact render={() => <Highscore />} />
                                <Route path="/register" exact render={() => <Register />} />
                            </Switch>
                        </div>
                    </div>
                </div>
                <ToastContainer />
            </Router >
        )
    }
}

export default App;