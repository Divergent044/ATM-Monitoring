import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import Ctx from 'src-components/Ctx';
import { loginAction } from '../../components/App/action';
import { pathOr } from 'ramda';

import classNames from 'classnames/bind';
import styles from './style.less';

const cx = classNames.bind(styles);

class Auth extends Component {
    state = {
        login: "",
        password: "",
        checkLogin: true,
    };

    componentDidUpdate(prevProps) {
        const { isAuthenticated, authResult, history } = this.props;
        if (prevProps.isAuthenticated !== isAuthenticated ||
            prevProps.authResult !== authResult
        ) {
            if (authResult === 'success' && isAuthenticated) {
                history.push('/atm/monitoring');
            }

            if (authResult === 'error' && !isAuthenticated) {
                this.setState({
                    checkLogin: false
                });
            }
        }
    }

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
        const { login, password } = this.state;

        this.setState({
            checkLogin: true
        });

        try {
            const encodedData = btoa(login + ':' + password);
            this.props.onSubmit(encodedData);
        } catch (e) {
            this.setState({
                checkLogin: false
            });
        }
    };


    render() {
        const {login, password, checkLogin} = this.state;

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

                    <span className={cx('auth-form__error', checkLogin ? 'hidden' : 'visible')}>
                         {Ctx.auth.error}
                    </span>

                    <input
                        type="button"
                        onClick={this.auth}
                        value="Enter"
                        className={cx('auth-form-enter__button')}
                    />
                </form>
            </div>
        );
    }
}

Auth.propTypes = {
    history: PropTypes.object,
    authResult: PropTypes.string,
    onSubmit: PropTypes.func,
    isAuthenticated: PropTypes.bool,
};

const mapStateToProps = state => ({
    authResult: pathOr('', ['appReducer', 'authorization', 'authResult'], state),
    isAuthenticated: pathOr(false, ['appReducer', 'authorization', 'isAuthenticated'], state)
});

const mapDispatchToProps = dispatch => ({
    onSubmit: encodedData => dispatch(loginAction(encodedData))
});

export default connect(mapStateToProps, mapDispatchToProps)(Auth);
