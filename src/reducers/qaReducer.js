export default function qaReducer(state = null, action) {
    switch (action.type) {
        case 'REQUESTING_QA': {
            return 'requesting'
        }
        case 'RECEIVE_QA':
            return action.data
        default: {
            return state
        }
    }
}
