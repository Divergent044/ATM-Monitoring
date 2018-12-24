import { combineReducers } from 'redux';


import institutesReducer from './pages/Institute/reducer';

const rootReducer = combineReducers({ institutesReducer });

export default rootReducer;
