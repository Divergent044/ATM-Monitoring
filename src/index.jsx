import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from "react-redux";
import { createStore } from "redux";
import { devToolsEnhancer } from "redux-devtools-extension";
import rootReducer from "./reducer";

import App from './App';

import './defaultStyles.less';

const store = createStore(rootReducer, devToolsEnhancer());
ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>, document.getElementById('root')
);
