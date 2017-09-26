import filterLinkActionTypes from "./filterLinkActionTypes";
import filterLinkStateTypes from "./filterLinkStateTypes";
import filterLinkInitialState from "./filterLinkInitialState";
import visibilityFilter from "./filterLinkReducer";

describe('todos filter link test', () => {
    it(`apply ${filterLinkStateTypes.SHOW_ALL} as Default filter on todos`, () => {
        const stateBefore = filterLinkInitialState;
        const action = {};
        const stateAfter = filterLinkStateTypes.SHOW_ALL;
        expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
    });

    it(`action ${filterLinkActionTypes.SET_VISIBILITY_FILTER} to apply ${filterLinkStateTypes.SHOW_ALL} on todos`, () => {
        const stateBefore = filterLinkInitialState;
        const action = {
            type: filterLinkActionTypes.SET_VISIBILITY_FILTER,
            filter: filterLinkStateTypes.SHOW_ALL,
        };
        const stateAfter = filterLinkStateTypes.SHOW_ALL;
        expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
    });

    it(`action ${filterLinkActionTypes.SET_VISIBILITY_FILTER} to apply ${filterLinkStateTypes.SHOW_ACTIVE} on todos`, () => {
        const stateBefore = filterLinkInitialState;
        const action = {
            type: filterLinkActionTypes.SET_VISIBILITY_FILTER,
            filter: filterLinkStateTypes.SHOW_ACTIVE,
        };
        const stateAfter = filterLinkStateTypes.SHOW_ACTIVE;
        expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
    });

    it(`action ${filterLinkActionTypes.SET_VISIBILITY_FILTER} to apply ${filterLinkStateTypes.SHOW_COMPLETE} on todos`, () => {
        const stateBefore = filterLinkInitialState;
        const action = {
            type: filterLinkActionTypes.SET_VISIBILITY_FILTER,
            filter: filterLinkStateTypes.SHOW_COMPLETE,
        };
        const stateAfter = filterLinkStateTypes.SHOW_COMPLETE;
        expect(visibilityFilter(stateBefore, action)).toEqual(stateAfter);
    });
});