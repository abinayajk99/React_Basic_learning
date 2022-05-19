import {combineReducers} from 'redux'
import ShopReducer from './Shopping/Shopping-reducers';

const rootReducer = combineReducers({
    shop:ShopReducer
});


export default rootReducer;