import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';
import formReducer from './reducers/formReducer';

const initStore = () => {
    const store = createStore(combineReducers({
        app: appReducer,
        inquiry: formReducer,
    }),
    applyMiddleware(thunk));
    return store;
};

export default initStore;
