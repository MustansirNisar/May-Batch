import {combineReducers, createStore} from 'redux';
import countReducer from './Reducer';
import colorReducer from './ColorReducer';

const reducer = combineReducers({
    count: countReducer,       //store = {count: 10}, color: {backgroundColor: "red"}
    color: colorReducer
})
let store = createStore(reducer)

export default store;