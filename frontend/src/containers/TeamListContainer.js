import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TeamList from './../components/Team/TeamList'
import { getTeams } from './../actions'

const mapStateToProps = state => ({ teams: state.voteCamisa.teams })
const mapDispatchToProps = dispatch => bindActionCreators({
  getTeams
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TeamList)
