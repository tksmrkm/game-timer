import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { setDrawerState } from '../actions'

const mapDispatchToProps = dispatch => ({
    handleOnClick(state) {
        dispatch(setDrawerState(state))
    }
})

export default connect(null, mapDispatchToProps)(Toolbar)
