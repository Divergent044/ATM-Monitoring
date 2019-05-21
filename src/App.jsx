import React, {Fragment} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';

import Header from 'src-components/Header';
import Auth from "./pages/Auth";
import MonitoringRouting from "./pages/MonitoringRouting";

import classNames from 'classnames/bind';
import styles from './defaultStyles.less';

const cx = classNames.bind(styles);

const App = () => (
    <Fragment>
        <Header/>
        <div className={cx('wrapper')}>
            <Switch>
                <Route path='/login' component={Auth}/>
                <Route path='/atm/monitoring' component={MonitoringRouting}/>
                <Route render={() => <Redirect to='/login'/>}/>
            </Switch>
        </div>
    </Fragment>
);

export default App;
