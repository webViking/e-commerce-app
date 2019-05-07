import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './storage/reducers/productsReducer'
import cartReducer from './storage/reducers/cartReducer'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    products: productsReducer,
    cart: cartReducer
})

export const configuredStore =  createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
)
