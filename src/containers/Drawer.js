import Drawer from '../components/Drawer'
import { connect } from 'react-redux'
import { setDrawerState } from '../actions'

const mapStateToProps = ({app}) => ({
    open: app.drawer
})

const mapDispatchToProps = dispatch => ({
    handleOnClose(state) {
        dispatch(setDrawerState(state))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Drawer)
