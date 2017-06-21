import axios from 'axios'
import submitURL from './submitURL.js'

export default function analyze(url) {
    return function(dispatch) {
        dispatch(submitURL(url))
        return axios({
            method: 'get',
            url: `http://www.langbench.com:8080/Web2Sentence/Load?format=text%2Fhtml&src=${encodeURIComponent(url)}`
        })
            .then(response => console.log(response))
            .catch(err => console.log(err))
    }
}
