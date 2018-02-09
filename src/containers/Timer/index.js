import { connect } from 'react-redux'
import Timer from '../../components/Timer'
import { editTimer } from '../../actions'

const mapStateToProps = ({timer}) => ({timer})

const mapDispatchToProps = dispatch => ({
    handleEditTimer(key, value) {
        dispatch(editTimer(key, value))
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Timer)
