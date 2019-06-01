import axios from 'axios'
import * as actionTypes from './actionTypes'

const API_BOOKS_URL = "http://localhost:3001/api/book"

export const fetchProductsStart = () =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_BEGINN
    }
}
export const fetchProductsSuccess = (booksData) =>{
    return{
        type: actionTypes.FETCH_PRODUCTS_SUCCESS,
        booksData
    }
}
export const fetchProductsFail = (error) => {
    return{
        type: actionTypes.FETCH_PRODUCTS_FAIL,
        error
    }   
}

export const fetchMetaDataSuccess = (metaData) =>{
    return{
        type:actionTypes.FETCH_METADATA,
        metaData
    }
}

export const fetchProducts = () =>{
    return dispatch =>{
        dispatch(fetchProductsStart())
        axios.get(API_BOOKS_URL).then(response =>{
            dispatch(fetchProductsSuccess(response.data.data))
            dispatch(fetchMetaDataSuccess(response.data.metadata))
        }).catch(error =>{
            dispatch(fetchProductsFail(error))
        })
    }
}
