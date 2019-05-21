import React, { Component } from 'react';
import axios from 'axios';

import {Link} from 'react-router-dom';
import Ctx from 'src-components/Ctx';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

class Auth extends Component {
    state = {
        login: "",
        password: "",
        checkLogin: true,
        nextUrl: "",
    };

    updateLogin = (e) => {
        this.setState({
            login: e.target.value,
        });
    };

    updatePassword = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    auth = () => {
        this.setState({
            checkLogin: true
        });

        const {username, password} = this.state;
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
                nextUrl: 'atm/monitoring'
            });
        }).catch(error => {
            if (error.response) {
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
    };


    render() {
        const {login, password, checkLogin, nextUrl} = this.state;

        return (
            <div className={cx('auth')}>
                <h1>{Ctx.auth.heading}</h1>
                <form className={cx('auth-form')}>
                    <label htmlFor="login" className={cx('auth-form__label')}>
                        {Ctx.auth.login}
                    </label>
                    <input
                        type="text"
                        id="login"
                        placeholder="Login"
                        value={login}
                        className={cx('auth-form__input')}
                        onChange={this.updateLogin}
                    />
                    <br/><br/>

                    <label htmlFor="password" className={cx('auth-form__label')}>
                        {Ctx.auth.password}
                    </label>
                    <input
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={password}
                        className={cx('auth-form__input')}
                        onChange={this.updatePassword}
                    />

                    {!checkLogin && (
                        <span className={cx('auth-form__error')}>
                                {Ctx.auth.error}
                        </span>
                    )}
                    <Link to={`/${nextUrl}`}>
                        <input
                            type="button"
                            onClick={this.auth}
                            value="Enter"
                            className={cx('auth-form-enter__button')}
                        />
                    </Link>
                </form>
            </div>
        );
    }
}

export default Auth;
