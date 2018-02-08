import { connect } from 'react-redux'
import AddForm from '../../components/Players/AddForm'
import { addPlayer } from '../../actions'

const mapDispatchToProps = dispatch => ({
    handleSubmit(id, name) {
        dispatch(addPlayer(id, name))
    }
})

export default connect(null, mapDispatchToProps)(AddForm)
