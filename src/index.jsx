import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducer";

import './defaultStyles.less';
import Auth from './pages/Auth';
import Institute from './pages/Settings/Institute';
import Groups from './pages/Settings/Groups';
import Monitoring from './pages/Monitoring';

const store = createStore(rootReducer, devToolsEnhancer());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path='/login' component={Auth} />
                <Route path='/atm/monitoring/settings/institute' component={Institute}/>
                <Route path='/atm/monitoring/settings/groups' component={Groups}/>
                <Route path='/atm/monitoring' component={Monitoring} />
                <Route render={() => <Redirect to='/login' />}/>
            </Switch>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
