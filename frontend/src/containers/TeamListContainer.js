import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TeamList from './../components/Team/TeamList/TeamList'
import { getTeams } from './../actions/teamActions'

class TeamListContainer extends Component {

  componentDidMount(){
    this.props.getTeams()
  }

  render() {
    return (
      <div>
        <TeamList
          teams={this.props.teams}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ teams: state.voteCamisa.teams })
const mapDispatchToProps = dispatch => bindActionCreators({
  getTeams
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamListContainer)
