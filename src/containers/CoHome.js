import { connect } from 'react-redux'
import analyze from '../actions/analyze.js'
import Home from '../components/Home.js'

const mapDispatchToProps = (dispatch) => (
    {
        handleSubmit: (url) => {
            dispatch(analyze(url))
        }
    }
)

const CoHome = connect(null, mapDispatchToProps)(Home)

export default CoHome
