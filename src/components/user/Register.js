import React, { Component } from 'react';
import { withRouter, Link } from "react-router-dom";
import { toast } from 'react-toastify';

class Register extends Component {
    constructor(props) {
        super(props);

        this.state = {
            usernameInput: '',
            passwordInput: '',
            confirmPasswordInput: '',
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

    handleConfirmPasswordChange(event) {
        this.setState({
            confirmPasswordInput: event.target.value
        });
    }

    handleSubmit = (event) => {
        event.preventDefault();

        if (this.state.usernameInput === "" || this.state.passwordInput === "" || this.state.confirmPasswordInput === "") {
            toast.error("Please, fill in every field");
        } else {
            let usersArray = JSON.parse(localStorage.getItem('users').toString());
            let user = usersArray.find(object => {
                return object.username === this.state.usernameInput
            });

            if (user !== undefined) {
                toast.error("User with this username already exists");
                return false;
            }

            let usernameRegex = /^[0-9A-Za-z_.-]+$/;
            if (!usernameRegex.test(this.state.usernameInput)) {
                toast.error("Your username can only consist of letters, digits, hyphens, underscores and periods");
                return false;
            }

            if (this.state.passwordInput.length < 4) {
                toast.error("Your password must be at least 4 characters long");
                return false;
            } else {
                if (this.state.passwordInput !== this.state.confirmPasswordInput) {
                    toast.error("Your passwords do not match");
                    return false;
                }

                this.setState({
                    isAuthenticated: true
                }, () => {
                    toast.success("You registered successfully");
                    const { usernameInput, passwordInput, isAuthenticated } = this.state;

                    const users = JSON.parse(localStorage.getItem("users"));
                    users.push(
                        { 'username': usernameInput, 'password': passwordInput }
                    );

                    // For the record, I know passwords must be hashed and definitely shouldn't be saved in browser storage
                    // But for the sake of this game, I'll just use local storage :D
                    localStorage.setItem('users', JSON.stringify(users));
                    localStorage.setItem('username', usernameInput);
                    localStorage.setItem('isAuthenticated', isAuthenticated);

                    let { from } = this.props.location.state || { from: { pathname: "/new-game" } };
                    this.props.history.replace(from);
                });
            }
        }
    }

    componentDidMount() {
        // If user has already logged in, go to home page
        if (localStorage.getItem("isAuthenticated") === "true") {
            this.props.history.push("/");
        }
    }

    render() {
        return (
            <div id="register-holder">
                <h2 className="title">Register</h2>
                <form onSubmit={this.handleSubmit} id="register-form" method="POST">
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
                        <label htmlFor="password" className="mt-4">Confirm password:</label>
                        <input
                            type="password"
                            className="form-control custom-form-control mb-4"
                            value={this.state.confirmPasswordInput}
                            onChange={confirmPasswordInput => this.handleConfirmPasswordChange(confirmPasswordInput)}
                            name="password"
                            autoComplete="off"
                            placeholder="Re-enter password"
                        />
                    </div>

                    <div className="buttons mt-md-4">
                        <button className="btn primary-button">Register</button>
                    </div>
                </form>
                <div className="register-login-reference">Already have an account?
                    <Link to="/login"> Click here to log in.</Link>
                </div>
            </div>
        );
    }
}

export default withRouter(Register);