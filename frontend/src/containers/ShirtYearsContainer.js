import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getShirtYears } from './../actions/teamActions'
import ShirtYearsList from './../components/Shirt/ShirtYearsList'

const mapStateToProps = state => ({ shirtYears: state.voteCamisa.shirtYears })
const mapDispatchToProps = dispatch => bindActionCreators({
  getShirtYears
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShirtYearsList)
