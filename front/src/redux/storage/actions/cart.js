import * as actionTypes from './actionTypes'


export const addToCartStart = () => {
    return {
        type: actionTypes.ADD_BOOK_TO_CART_BEGINN
    }
}
export const addToCartFail = (error) => {
    return {
        type: actionTypes.ADD_BOOK_TO_CART_FAIL,
        error
    }
}
export const addToCartSuccess = (addedBooks) => {
    return {
        type: actionTypes.ADD_BOOK_TO_CART_SUCCESS,
        addedBooks
    }
}
