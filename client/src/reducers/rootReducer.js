import { combineReducers } from 'redux'
import urlReducer from './urlReducer.js'
import qaReducer from './qaReducer.js'
import modalReducer from './modalReducer.js'
import vendorsReducer from './vendorsReducer.js'

const rootReducer = combineReducers({
    url: urlReducer,
    qa: qaReducer,
    modal: modalReducer,
    vendors: vendorsReducer
})

export default rootReducer
