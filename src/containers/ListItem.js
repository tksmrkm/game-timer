import { connect } from 'react-redux'
import ListItem from '../components/ListItem'
import { setDrawerState } from '../actions'

const mapDispatchToProps = dispatch => ({
    handleOnClick(state) {
        dispatch(setDrawerState(state))
    }
})

export default connect(null, mapDispatchToProps)(ListItem)
