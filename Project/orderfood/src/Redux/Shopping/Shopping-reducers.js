import * as actionTypes from './Shopping_types'
const Initial_State = {
    products:[],
    cart:[],
    currentItem:null
}

const ShopReducer = (state = Initial_State,action) =>{
    switch(action.type){
        case actionTypes.SET_PRODUCTS:
            return { ...state,products:action.payload}
        case actionTypes.ADD_TO_CART:
            const item = state.cart.find((prod)=>prod.id === action.payload.item.id)
            const inCart = state.cart.find((item) => item.id === action.payload.item.id ? true : false)
            return {
                ...state,cart:inCart ? state.cart.map((item) => item.id === state.payload.item.id ? {...item,quantity:item.quantity+1}:item):
                [...state.cart,{...action.payload.item,quantity:1}]

            }
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