// import { combineReducers } from 'redux';
import { appStateReducer } from './appState';

// export const appReducer = combineReducers({
export const appReducer = {
    appState: appStateReducer,
};