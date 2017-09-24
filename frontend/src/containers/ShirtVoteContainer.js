import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getShirts } from './../actions/teamActions'
import ShirtVoteList from './../components/Shirt/ShirtVoteList'

class ShirtVoteContainer extends Component {

  componentDidMount(){
    const { team, year } = this.props.params
    this.props.getShirts(team, year)
  }

  render(){
    return(
      <div>
        <ShirtVoteList
          team={this.props.params.team}
          year={this.props.params.year}
          shirts={this.props.shirts}
        />
      </div>
    )
  }

}

const mapStateToProps = state => ({ shirts: state.voteCamisa.shirts })
const mapsDispatchToProps = dispatch => bindActionCreators({
  getShirts
}, dispatch)

export default connect(mapStateToProps, mapsDispatchToProps)(ShirtVoteContainer)
