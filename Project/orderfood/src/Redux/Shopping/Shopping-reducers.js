import * as actionTypes from './Shopping_types'
const Initial_State = {
    products:[],
    cart:[],
    currentItem:null
}

const ShopReducer = (state = Initial_State,action) =>{
    switch(action.types){
        case actionTypes.SET_PRODUCTS:
            return { ...state,products:action.payload}
        case actionTypes.ADD_TO_CART:
            return {}
        case actionTypes.REMOVE_FROM_CART:
            return {}   
        case actionTypes.ADJUST_QUALITY:
            return {}
        case actionTypes.LOAD_CURRENT_DATA:
            return {}
        default:
            return state
    }
}

export default ShopReducer;