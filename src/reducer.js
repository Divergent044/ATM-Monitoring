import { combineReducers } from 'redux';


import institutesReducer from './pages/Settings/Institute/reducer';
import groupsReducer from './pages/Settings/Groups/reducer';

const rootReducer = combineReducers({ institutesReducer, groupsReducer });

export default rootReducer;
