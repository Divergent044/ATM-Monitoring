import { combineReducers } from 'redux';

import institutesReducer from './pages/Settings/Institute/reducer';
import groupsReducer from './pages/Settings/Groups/reducer';
import { appReducer } from './components/App/appReducer';

const rootReducer = combineReducers({ institutesReducer, groupsReducer, appReducer });

export default rootReducer;
