import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getShirts, registerVote } from './../actions'
import ShirtVoteList from './../components/Shirt/ShirtVoteList'

const mapStateToProps = state => ({ shirts: state.voteCamisa.shirts })
const mapDispatchToProps = dispatch => bindActionCreators({
  getShirts,
  registerVote
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShirtVoteList)
