import * as _ from 'lodash'

export default function vendorsReducer(state = {
    google: false,
    amazon: false,
    apple: false
}, action) {
    switch (action.type) {
        case 'UPDATE_VENDOR_SELECTION': {
            let newState = _.cloneDeep(state)
            newState[action.name] = !newState[action.name]
            return newState
        }
        default: {
            return state
        }
    }
}
