import { connect } from 'react-redux'
import Players from '../../components/Players'

const mapStateToProps = ({players}) => ({players})

export default connect(mapStateToProps)(Players)
