import { createStore, applyMiddleware, combineReducers, compose  } from 'redux';
import thunk from 'redux-thunk';

import projectsReducer from './storage/reducers/projectsReducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const rootReducer = combineReducers({
    projects: projectsReducer
})

export const configuredStore =  createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
)
