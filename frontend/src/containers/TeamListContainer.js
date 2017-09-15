import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TeamList from './../components/Team/TeamList/TeamList'
import { refresh } from './../actions/teamActions'

class TeamListContainer extends Component {

  componentDidMount(){
    this.props.refresh()
  }

  render() {
    return (
      <div>
        <TeamList
          teams={this.props.data}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.teams.data })
const mapDispatchToProps = dispatch => bindActionCreators({
  refresh
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamListContainer)
