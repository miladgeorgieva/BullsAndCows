import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { toast } from 'react-toastify';

class Login extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: '',
            passwordInput: '',
            isAuthenticated: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUsernameChange(event) {
        this.setState({
            usernameInput: event.target.value
        });
    }

    handlePasswordChange(event) {
        this.setState({
            passwordInput: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        let usersArray = JSON.parse(localStorage.getItem('users').toString());

        let user = usersArray.find(object => {
            return object.username === this.state.usernameInput
        });

        if (this.state.usernameInput !== "" && this.state.passwordInput !== "") {
            if (user === undefined) {
                toast.error("Your username or password is incorrect");
                return false;
            } else {
                if (user.password !== this.state.passwordInput) {
                    toast.error("Your username or password is incorrect");
                    return false;
                } else {
                    this.setState({
                        isAuthenticated: true
                    }, () => {
                        const { usernameInput, isAuthenticated } = this.state;
                        toast.success('You logged in successfully');

                        localStorage.setItem('username', usernameInput);
                        localStorage.setItem('isAuthenticated', isAuthenticated);

                        let { from } = this.props.location.state || { from: { pathname: "/new-game" } };
                        this.props.history.replace(from);
                    });
                }
            }
        } else {
            toast.error("Please, fill out every field");
        }
    }

    componentDidMount() {
        // If user has already logged in, go to home page
        if (localStorage.getItem('isAuthenticated') === 'true') {
            this.props.history.push('/');
        }
    }

    render() {
        return (
            <div id="login-holder">
                <h2 className="title">Login</h2>
                <form onSubmit={this.handleSubmit} id="login-form" method="POST">
                    <div className="input-group custom-input-group">
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            className="form-control custom-form-control mb-4"
                            value={this.state.usernameInput}
                            onChange={usernameInput => this.handleUsernameChange(usernameInput)}
                            name="username"
                            autoComplete="off"
                            placeholder="Enter username"
                        />
                        <label htmlFor="password" className="mt-4">Password:</label>
                        <input
                            type="password"
                            className="form-control custom-form-control mb-4"
                            value={this.state.passwordInput}
                            onChange={passwordInput => this.handlePasswordChange(passwordInput)}
                            name="password"
                            autoComplete="off"
                            placeholder="Enter password"
                        />
                    </div>

                    <div className="buttons mt-md-4">
                        <button className="btn primary-button">Login</button>
                    </div>
                </form>
                <div className="register-login-reference">You haven't registered yet?
                    <Link to="/register"> Click here</Link>
                </div>
            </div>
        );
    }
}
export default withRouter(Login);
