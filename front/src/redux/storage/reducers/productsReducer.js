import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    loading: false,
    error: null,
    cart: [],


    page: null,
    records_per_page: null,
    total_records: null
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
            return {
                ...state,
                products: action.booksData,
                loading: false,
            }
        case actionTypes.FETCH_METADATA:
            return {
                ...state,
                page: action.metaData.page,
                records_per_page: action.metaData.records_per_page,
                total_records: action.metaData.total_records

            }
        case actionTypes.ADD_BOOK_TO_CART_BEGINN:
            return {
                ...state,
                error: null,
                loading: true
            }
        case actionTypes.ADD_BOOK_TO_CART_FAIL:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case actionTypes.ADD_BOOK_TO_CART_SUCCESS:
            return {
                ...state,
                loading: false,
                cart: state.cart.concat(action.addedBooks)
            }
        case actionTypes.CLEAR_CART:
            return {
                ...state,
                cart: []
            }
        case actionTypes.REMOVE_EL_FROM_CART:
            return{
                ...state,
                cart: state.cart.filter(item=>item.id !== action.elId)
            }
        default:
            return state
    }
}
export default productsReducer