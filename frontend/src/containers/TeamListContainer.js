import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { refresh } from './../actions/teamActions'

class TeamListContainer extends Component {
  constructor(props){
    super(props)

    this.teamsLogo = this.teamsLogo.bind(this)
  }

  componentWillMount(){
    this.props.refresh()
  }

  teamsLogo(){
    const { data } = this.props
    // console.log('Data:', data)
    // Object.entries(data).map((value, index) => console.log(value[1].name))
    const teamLogo = Object.values(data)

    console.log(teamLogo)
  }

  render() {
    return (
      <div>
        {this.teamsLogo()}
      </div>
    );
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
