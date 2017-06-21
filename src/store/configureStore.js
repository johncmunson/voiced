import { createStore, applyMiddleware, compose } from 'redux'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
import rootReducer from '../reducers/rootReducer'

// Necessary for redux devtools in Chrome. Wrap this around 'applyMiddleware'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

export default function configureStore(preloadedState) {
    return createStore(
        rootReducer,
        preloadedState,
        composeEnhancers(
            applyMiddleware(
                thunkMiddleware,
                logger
            )
        )
    )
}
