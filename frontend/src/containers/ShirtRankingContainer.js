import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getRanking } from './../actions'
import ShirtRanking from './../components/Shirt/ShirtRanking'

const mapStateToProps = state => ({ ranking: state.voteCamisa.ranking })
const mapDispatchToProps = dispatch => bindActionCreators({
  getRanking
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShirtRanking)
