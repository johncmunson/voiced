import { combineReducers } from 'redux'
import urlReducer from './urlReducer.js'
import qaReducer from './qaReducer.js'

const rootReducer = combineReducers({
    url: urlReducer,
    qa: qaReducer
})

export default rootReducer
