import { connect } from 'react-redux'
import RouteComponent from '../components/RouteComponent'
import { setPageTitle } from '../actions'

const mapDispatchToProps = dispatch => ({
    setPageTitle(title) {
        dispatch(setPageTitle(title))
    }
})

export default connect(null, mapDispatchToProps)(RouteComponent)
