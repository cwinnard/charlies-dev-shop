import { combineReducers, createStore } from 'redux';

import appReducer from './reducers/appReducer';
import formReducer from './reducers/formReducer';

const initStore = () => {
    const store = createStore(combineReducers({
        app: appReducer,
        inquiry: formReducer,
    }));
    return store;
};

export default initStore;
