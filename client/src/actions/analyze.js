import axios from 'axios'
import submitURL from './submitURL.js'

export default function analyze(url) {
    return function(dispatch) {
        dispatch(submitURL(url))
        return axios({
            method: 'get',
            url: `/api/primer?url=${url}`
        })
    }
}
