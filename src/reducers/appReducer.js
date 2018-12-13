import appDefaultState from './appDefaultState';

const appReducer = (state = appDefaultState, action) => {
    const newState = state;
    switch (action.type) {
    case 'TOGGLE_MENU':
        console.log(state.menuVisible);
        newState.menuVisible = !state.menuVisible;
        console.log(newState);
        return newState;
    default:
        return state;
    }
};

export default appReducer;
