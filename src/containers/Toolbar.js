import Toolbar from '../components/Toolbar'
import { connect } from 'react-redux'
import { setDrawerState } from '../actions'

const mapStateToProps = ({app}) => ({
    title: app.title
})

const mapDispatchToProps = dispatch => ({
    handleOnClick(state) {
        dispatch(setDrawerState(state))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar)
