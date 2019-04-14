import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import userDataReducer from './reducers/userDataReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default ()=>{
    const store = createStore(
        combineReducers({
            userData : userDataReducer
        }),
    composeEnhancers(applyMiddleware(thunk))
    );
    return store;
};
