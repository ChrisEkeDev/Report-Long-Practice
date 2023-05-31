import {createStore, combineReducers, applyMiddleware, compose } from 'redux';
import initialReports from '../data/initial-reports.json';

const logger = require("redux-logger").default;
const composeEnhancers =
window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reportObj = {};
initialReports.forEach(report => {
  reportObj[report.id] = report
})
const initialState = { reports: reportObj };

export const reportReducer = (state = initialState, action) => {
    switch(action.type) {
      default: return state
    }
}


const enhancer = composeEnhancers(applyMiddleware(logger));

export const configureStore = (preloadedState) => {
  return createStore(reportReducer, preloadedState, enhancer);
};

export default configureStore;
