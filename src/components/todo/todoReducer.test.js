import todos from "./todoReducer";

describe('todos reducer test', () => {
    it('action ADD_TODO to add todos', () => {
        const stateBefore = [];
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux',
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                complete: false,
            }
        ];

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    it('action DEFAULT to return existing state', () => {
        const stateBefore = [];
        const action = {
            type: 'DEFAULT',
        };
        const stateAfter = [];

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    });

    it('action TOGGLE_TODO to change state of todo to completed', () => {
        const stateBefore = [
            {
                id: 0,
                text: 'Learn Redux',
                complete: false,
            },
            {
                id: 1,
                text: 'Go Shopping',
                complete: false,
            }
        ];
        const action = {
            type: 'TOGGLE_TODO',
            id: 1,
        };
        const stateAfter = [
            {
                id: 0,
                text: 'Learn Redux',
                complete: false,
            },
            {
                id: 1,
                text: 'Go Shopping',
                complete: true,
            }
        ];

        expect(todos(stateBefore, action)).toEqual(stateAfter);
    })
});