import { createStore,combineReducers } from 'redux';
import shoesReducer from '../reducers/Shoes';
import shirtsReducer from '../reducers/Shirts';
import pantsReducer from '../reducers/Pants';
import choosingReducer from '../reducers/choosing';

const reducer=combineReducers({shoesReducer,shirtsReducer,pantsReducer,choosingReducer})

const store = createStore(reducer);
window.store = store;
export default store;