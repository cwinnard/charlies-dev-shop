const inquiryReducer = (state = [], action) => {
    const newState = state;
    switch (action.type) {
    case 'SUBMIT_FORM':
        newState.menuVisible = !state.menuVisible;
        return newState;
    default:
        return state;
    }
};

export default inquiryReducer;
