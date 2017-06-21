import { connect } from 'react-redux'
import fetchQA from '../actions/fetchQA.js'
import updateQASelection from '../actions/updateQASelection.js'
import updateVendorSelection from '../actions/updateVendorSelection.js'
import toggleModal from '../actions/toggleModal.js'
import QA from '../components/QA.js'

const mapStateToProps = (state) => (
    {
        url: state.url,
        qa: state.qa,
        modal: state.modal,
        vendors: state.vendors
    }
)

const mapDispatchToProps = (dispatch) => (
    {
        fetchQA: (url) => {
            dispatch(fetchQA(url))
        },
        updateQASelection: (index) => {
            dispatch(updateQASelection(index))
        },
        updateVendorSelection: (name) => {
            dispatch(updateVendorSelection(name))
        },
        toggleModal: () => {
            dispatch(toggleModal())
        }
    }
)

const CoQA = connect(mapStateToProps, mapDispatchToProps)(QA)

export default CoQA
