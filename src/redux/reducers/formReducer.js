const formReducer = (state = [], action) => {
    const newState = state;
    switch (action.type) {
    case 'SUBMIT_FORM':
        newState.submitted = true;
        return newState;
    default:
        return state;
    }
};

export default formReducer;
