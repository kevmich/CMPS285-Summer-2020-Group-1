import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const intitalState = {};
const middleware = [thunk];

const store = createStore(
    rootReducer,
    intitalState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;