const appReducer = (state = [], action) => {
    const newState = { ...state };
    switch (action.type) {
    default:
        newState.loaded = true;
        return newState;
    }
};

export default appReducer;
