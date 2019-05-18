import * as actionTypes from '../actions/actionTypes'

const initialState = {
    products: [],
    cart: [],
    loading: false,
    error: null,

    page:null,
    records_per_page:null,
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
        return{
            ...state,
            products: action.booksData,
            loading:false,
        }
        case actionTypes.FETCH_METADATA:
        return{
            ...state,
            page:action.metaData.page,
            records_per_page:action.metaData.records_per_page,
            total_records: action.metaData.total_records

        }
        default:
            return state
    }
}
export default productsReducer