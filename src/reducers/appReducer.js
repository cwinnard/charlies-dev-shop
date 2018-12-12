import appDefaultState from './appDefaultState';

const appReducer = (state = appDefaultState, action) => {
    const newState = state;
    switch (action.type) {
    case 'TOGGLE_MENU':
        newState.menuVisable = !state.menuVisable;
        return newState;
    default:
        return state;
    }
};

export default appReducer;
