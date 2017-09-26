const loadLocalState = () => {
    try {
        const serializedState = localStorage.getItem('user');
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (err) {
        return undefined;
    }
};

const saveLocalState = (state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem('user', serializedState);
    } catch (err) {
        // Ignore Write err
    }
};

const deleteLocalState = () => {
    localStorage.removeItem('user');
};

export {
    loadLocalState,
    saveLocalState,
    deleteLocalState,
};