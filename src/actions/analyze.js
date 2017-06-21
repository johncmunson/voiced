import axios from 'axios'
import submitURL from './submitURL.js'

export default function analyze(url) {
    return function(dispatch) {
        dispatch(submitURL(url))
        return axios({
            method: 'get',
            url: `http://www.langbench.com:8080/Web2Sentence/Load?format=text%2Fhtml&src=${encodeURIComponent(url)}`
        })
            .then(response => {
                axios({
                    method: 'get',
                    url: `http://www.langbench.com:8080/Source2Question/proposeQuestions?src=${encodeURIComponent(url)}`
                })
            })
            .catch(err => console.log(err))
    }
}
