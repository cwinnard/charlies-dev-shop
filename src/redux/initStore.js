import { applyMiddleware, combineReducers, createStore } from 'redux';
import { reducer as rformReducer } from 'redux-form';
import thunk from 'redux-thunk';

import appReducer from './reducers/appReducer';
import formReducer from './reducers/formReducer';

const initStore = () => {
    const store = createStore(combineReducers({
        app: appReducer,
        inquiry: formReducer,
        form: rformReducer,
    }),
    applyMiddleware(thunk));
    return store;
};

export default initStore;
