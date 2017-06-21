import { connect } from 'react-redux'
import fetchQA from '../actions/fetchQA.js'
import QA from '../components/QA.js'

const mapStateToProps = (state) => (
    {
        url: state.url,
        qa: state.qa
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchQA: (url) => {
            dispatch(fetchQA(url))
        }
    }
)

const CoQA = connect(mapStateToProps, mapDispatchToProps)(QA)

export default CoQA
