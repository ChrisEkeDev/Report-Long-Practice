import initialReports from "../data/initial-reports.json";

//types
const DELETE_REPORT = 'reports/deleteSingleReport';
const CREATE_REPORT = 'reports/createSingleReport';
const RESET_REPORTS = 'reports/resetReports';

//action creators
export const deleteSingleReport = (report) => {
    return {
        type: DELETE_REPORT,
        report
    }
}

export const createSingleReport = (report) => {
  return {
    type: CREATE_REPORT,
    report
  }
}

export const resetReports = () => {
  return {
    type: RESET_REPORTS
  }
}

// reducer
const initialState = {};
initialReports.forEach(report => {
    initialState[report.id] = report
})

const reportReducer = (state = initialState, action) => {
    switch(action.type) {
      case DELETE_REPORT: {
        const newState = {...state};
        delete newState[action.report];
        return newState;
      };
      case CREATE_REPORT: {
        return { ...state, [action.report.id]: action.report }
      }
      case RESET_REPORTS: {
        return initialState
      }
      default: return state
    }
}

export default reportReducer;
