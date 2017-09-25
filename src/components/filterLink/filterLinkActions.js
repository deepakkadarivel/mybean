import filterLinkActionTypes from "./filterLinkActionTypes";

const setVisibilityFilter = (filter) => {
    return {
        type: filterLinkActionTypes.SET_VISIBILITY_FILTER,
        filter,
    }
};

export default setVisibilityFilter;