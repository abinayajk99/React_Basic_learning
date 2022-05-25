import * as actionTypes from './Shopping_types'
const Initial_State = {
    products:[],
    cart:[],
    currentItem:null,
    isLogin : false,
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
            const data = {...state,cart:state.cart.filter((item) => item.id !== action.payload.id)}
            console.log(data)
            return {...state,cart:state.cart.filter((item) => item.id !== action.payload.id)}   
        
        case actionTypes.ADD_ADJUST_QUALITY:
            const incartitem = state.cart.find((prod) => prod.id === action.payload.item.id)
            return {...state,cart:state.cart.map((incartitem) => incartitem.id === action.payload.item.id? {...incartitem,quantity:incartitem.quantity+1}:incartitem)}
        
        case actionTypes.Dec_ADJUST_QUALITY:
            const incartDecItem = state.cart.find((prod) => prod.id === action.payload.item.id)
            return {...state,cart:incartDecItem.quantity === 0 ?
                state.cart.filter((incartDecItem) => incartDecItem.id !== action.payload.item.id)
                :state.cart.map((incartDecItem) => incartDecItem.id === action.payload.item.id? {...incartDecItem,quantity:incartDecItem.quantity-1}:incartDecItem)}
    
        case actionTypes.IS_LOGIN:
            console.log("islogin..........",action.payload.item)
            return {...state,isLogin:action.payload.item}
        default:
            return state
    }
}

export default ShopReducer;