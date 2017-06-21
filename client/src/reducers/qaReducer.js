import * as _ from 'lodash'

export default function qaReducer(state = null, action) {
    switch (action.type) {
        case 'REQUESTING_QA': {
            return 'requesting'
        }
        case 'RECEIVE_QA': {
            let filteredData = _.uniqBy(action.data, 'question')
            return filteredData
        }
        case 'UPDATE_QA_SELECTION': {
            let newState = _.cloneDeep(state)
            if (newState[action.index].selected) {
                newState[action.index].selected = !newState[action.index].selected
            } else {
                newState[action.index].selected = true
            }
            return newState
        }
        default: {
            return state
        }
    }
}
