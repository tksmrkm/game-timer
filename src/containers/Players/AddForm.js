import { connect } from 'react-redux'
import AddForm from '../../components/Players/AddForm'
import {
    addPlayer,
    shufflePlayer
} from '../../actions'

const mapDispatchToProps = dispatch => ({
    handleSubmit(id, name) {
        dispatch(addPlayer(id, name))
    },
    handleShufflePlayer() {
        dispatch(shufflePlayer())
    }
})

export default connect(null, mapDispatchToProps)(AddForm)
