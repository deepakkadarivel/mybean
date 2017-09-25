import filterLinkInitialState from "./filterLinkInitialState";
import filterLinkActionTypes from "./filterLinkActionTypes";

const visibilityFilter = (state = filterLinkInitialState, action) => {
    switch (action.type) {
        case filterLinkActionTypes.SET_VISIBILITY_FILTER:
            return action.filter;
        default:
            return state;
    }
};

export default visibilityFilter;