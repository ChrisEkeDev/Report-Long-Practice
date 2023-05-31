import initialReports from "../data/initial-reports.json";
//types
const DELETE_REPORT = 'reports/deleteSingleReport';

//action creators
export const deleteSingleReport = (report) => {
    return {
        type: DELETE_REPORT,
        report
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
      default: return state
    }
}

export default reportReducer;