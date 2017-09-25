import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getShirtYears } from './../actions'
import ShirtYearsList from './../components/Shirt/ShirtYearsList'

const mapStateToProps = state => ({ shirtYears: state.voteCamisa.shirtYears })
const mapDispatchToProps = dispatch => bindActionCreators({
  getShirtYears
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShirtYearsList)
