import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialReports from '../data/initial-reports.json';
import reportReducer from './reports';

const rootReducer = combineReducers( { reports: reportReducer });


const logger = require("redux-logger").default;
const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;




const enhancer = composeEnhancers(applyMiddleware(logger));

export const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
