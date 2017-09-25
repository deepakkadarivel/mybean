import todoApp from './todoReducer';

describe('todos reducer test', () => {
    it('action ADD_TODO to add todos', () => {
        const stateBefore = {todos: [], visibilityFilter: 'SHOW_ALL'};
        const action = {
            type: 'ADD_TODO',
            id: 0,
            text: 'Learn Redux',
        };
        const stateAfter = {
            todos: [
                {
                    id: 0,
                    text: 'Learn Redux',
                    complete: false,
                }
            ],
            visibilityFilter: 'SHOW_ALL',
        };

        expect(todoApp(stateBefore, action)).toEqual(stateAfter);
    });

    it('action DEFAULT to return existing state', () => {
        const stateBefore = {todos: [], visibilityFilter: 'SHOW_ALL'};
        const action = {
            type: 'DEFAULT',
        };
        const stateAfter = {todos: [], visibilityFilter: 'SHOW_ALL'};

        expect(todoApp(stateBefore, action)).toEqual(stateAfter);
    });

    it('action TOGGLE_TODO to change state of todo to completed', () => {
        const stateBefore = {
            todos: [
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
            ],
            visibilityFilter: 'SHOW_ALL'
        };
        const action = {
            type: 'TOGGLE_TODO',
            id: 1,
        };
        const stateAfter = {
            todos: [
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
            ],
            visibilityFilter: 'SHOW_ALL'
        };

        expect(todoApp(stateBefore, action)).toEqual(stateAfter);
    })
});