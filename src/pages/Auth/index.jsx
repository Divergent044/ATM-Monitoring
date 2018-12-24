import React, {Component, Fragment} from 'react';

import { Link } from 'react-router-dom';
import Header from '../../components/Header';

import axios from 'axios';
import './style.less';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            login: "",
            password: "",
            checkLogin: true,
            nextUrl: ""
        };
        this.updateLogin = this.updateLogin.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
        this.auth = this.auth.bind(this);
    }

    updateLogin(e) {
        this.setState({
            login: e.target.value,
        });
    }

    updatePassword(e) {
        this.setState({
            password: e.target.value
        });
    }

    auth() {
        this.setState({
            checkLogin: true
        });
        const { username, password } = this.state;
        const encodedData = btoa(username + ':' + password);
        axios({
            method: 'POST',
            url: 'http://localhost:8443/oauth/token?grant_type=client_credentials',
            withCredentials: 'true',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Basic ' + encodedData
            }
        }).then(() => {
            this.setState({
                nextUrl: "monitoring"
            });
        }).catch(error => {
            if (error.response) {
                console.log(error.response.status);
                if (error.response.status === 401) {
                    this.setState({
                        checkLogin: false
                    });
                } else {
                    this.setState({
                        checkLogin: true
                    });
                }
            }
        });
    }


    render() {
        return (
            <Fragment>
                <Header/>
                <div className="auth">
                    <h1>Cash Management</h1>
                    <form className="auth-form">
                        <label htmlFor="login" className="auth-form__label">Login:</label>
                        <input
                            type="text"
                            id="login"
                            placeholder="Login"
                            value={this.state.login}
                            className="auth-form__input"
                            onChange={this.updateLogin}
                        />
                        <br/><br/>
                        <label htmlFor="password" className="auth-form__label">Password:</label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Password"
                            value={this.state.password}
                            className="auth-form__input"
                            onChange={this.updatePassword}
                        />
                        {!this.state.checkLogin && (
                            <span className="auth-form__error">
                            Incorrect Login/Password
                        </span>
                        )}
                        <Link to={`/${this.state.nextUrl}`}>
                            <input
                                type="button"
                                onClick={this.auth}
                                value="Enter"
                                className="auth-form-enter__button"
                            />
                        </Link>
                    </form>
                </div>
            </Fragment>
        );
    }
}
