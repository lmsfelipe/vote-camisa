import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getApiData } from './../actions/teamActions'
import ShirtVoteList from './../components/Shirt/ShirtVoteList'

class ShirtVoteContainer extends Component {

  componentDidMount(){
    this.props.getApiData()
  }

  render(){
    return(
      <div>
        <ShirtVoteList
          params={this.props.params}
          data={this.props.data}
        />
      </div>
    )
  }

}

const mapStateToProps = state => ({ data: state.teams.data })
const mapsDispatchToProps = dispatch => bindActionCreators({
  getApiData
}, dispatch)

export default connect(mapStateToProps, mapsDispatchToProps)(ShirtVoteContainer)
