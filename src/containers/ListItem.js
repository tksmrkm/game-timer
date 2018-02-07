import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import {
    setDrawerState,
    setPageTitle
} from '../actions'

const mapDispatchToProps = dispatch => ({
    handleOnClick(state, label) {
        dispatch(setDrawerState(state))
        dispatch(setPageTitle(label))
    }
})

export default connect(null, mapDispatchToProps)(ListItem)
