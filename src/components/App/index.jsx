import React, { Fragment } from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from 'src-components/Header';
import Auth from '../../pages/Auth';
import MonitoringRouting from '../../pages/MonitoringRouting';

import classNames from 'classnames/bind';
import styles from '../../defaultStyles.less';
const cx = classNames.bind(styles);

const App = ({ isAuthenticated, logoutCallback }) => (
    <Fragment>
        <Header/>
        <div className={cx('wrapper')}>
            <Switch>
                <Route
                    path='/login'
                    render={(props) => <Auth {...props} />}
                />
                <Route
                    path="/atm/monitoring"
                    render={(props) => <MonitoringRouting callback={logoutCallback} {...props} />}
                />
            </Switch>
            <Redirect push to={isAuthenticated ? '/atm/monitoring' : '/login'} />
        </div>
    </Fragment>
);

App.propTypes = {
    isAuthenticated: PropTypes.bool,
    logoutCallback: PropTypes.func,
};

export default App;
