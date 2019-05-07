import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: null
}

const productsReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_PRODUCTS_BEGINN:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_PRODUCTS_FAIL:
            return {
                ...state,
                error: action.error
            }
        case actionTypes.FETCH_PRODUCTS_SUCCESS:
        return{
            ...state,
            products: action.booksData,
            loading:false,
        }
        default:
            return state
    }
}
export default productsReducer