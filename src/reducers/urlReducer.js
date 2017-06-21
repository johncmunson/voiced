export default function urlReducer(state = null, action) {
    switch (action.type) {
        case 'SUBMIT_URL': {
            return action.url
        }
        default: {
            return state
        }
    }
}
