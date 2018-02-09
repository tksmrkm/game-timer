import { connect } from 'react-redux'
import Item from '../../components/Players/Item'
import { sortPlayer } from '../../actions'

const mapDispatchToProps = dispatch => ({
    sortPlayer(pid, dragIndex, hoverIndex) {
        dispatch(sortPlayer(pid, dragIndex, hoverIndex))
    }
})

export default connect(null, mapDispatchToProps)(Item)
