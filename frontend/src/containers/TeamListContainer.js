import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TeamList from './../components/Team/TeamList/TeamList'
import { getApiData } from './../actions/teamActions'

class TeamListContainer extends Component {

  componentDidMount(){
    this.props.getApiData()
  }

  render() {
    return (
      <div>
        <TeamList
          data={this.props.data}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.teams.data })
const mapDispatchToProps = dispatch => bindActionCreators({
  getApiData
}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TeamListContainer)
