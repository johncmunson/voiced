import { connect } from 'react-redux'
import axios from 'axios'
import requestingQA from './requestingQA.js'
import receiveQA from './receiveQA.js'

export default function fetchQA(url) {
    return function(dispatch) {
        dispatch(requestingQA())
        return axios({
            method: 'get',
            url: `http://www.langbench.com:8080/Source2Question/getQuestions?src=${encodeURIComponent(url)}`
        })
            .then(response => dispatch(receiveQA(response.data.results)))
            .catch(err => console.log(err))
    }
}
