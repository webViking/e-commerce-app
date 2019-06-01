import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import thunk from 'redux-thunk';

import productsReducer from './storage/reducers/productsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    products: productsReducer,
})

export const configuredStore =  createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
)
