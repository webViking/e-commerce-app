import * as actionTypes from '../actions/actionTypes'

const initalState = {
    cart:[],
    error:null,
    loading:false,
}

const cartReducer = (state=initalState, action)=>{
    switch(action.type){
        case actionTypes.ADD_BOOK_TO_CART_BEGINN:
        return{
            ...state,
            error:null,
            loading:true
        }
        case actionTypes.ADD_BOOK_TO_CART_FAIL:
        return{
            ...state,
            error: action.error, 
            loading:false
        }
        case actionTypes.ADD_BOOK_TO_CART_SUCCESS:
        return{
            loading:false,
            cart: action.addedBooks
        }
        default:
        return state
    }
}
export default cartReducer