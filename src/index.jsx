import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk'
import { composeWithDevTools } from "redux-devtools-extension";

import { BrowserRouter } from 'react-router-dom';
import rootReducer from "./rootReducer";
import App from './components/App';
import AppHOC from './components/App/AppHOC';
import './defaultStyles.less';

const composeEnhancers = composeWithDevTools({});
const store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppHOC>
                <App />
            </AppHOC>
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
