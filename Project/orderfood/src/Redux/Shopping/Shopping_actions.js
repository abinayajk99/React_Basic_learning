import * as actionTypes from './Shopping_types'

export const SetProduct = (product) =>{
    return {
        type:actionTypes.SET_PRODUCTS,
        payload:product
    }
}
export const addToCart = (Item) =>{
    return{
        type:actionTypes.ADD_TO_CART,
        payload:{item:Item}
    }
}
export const removeFromCart = (ItemID) =>{
    return{
        type:actionTypes.REMOVE_FROM_CART,
        payload:{id:ItemID}
    }
}

export const adjustQuality = (ItemID,Value) => {
    return{
        type:actionTypes.ADJUST_QUALITY,
        payload:{
            id:ItemID,
            qty:Value
        }
    }
}

export const loadCurrentData = (Item) =>{
    return{
        type:actionTypes.LOAD_CURRENT_DATA,
        payload:{Item:Item}
    }

}