import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { registerVote } from './../../../actions/teamActions'

import ShirtItem from './../ShirtItem/ShirtItem'
import { Button } from 'react-bootstrap'

class ShirtVoteList extends Component {
  constructor(props){
    super(props)

    this.shirtVoteList = this.shirtVoteList.bind(this)
  }

  shirtVoteList(){
    const { shirts, team, year } = this.props

    return shirts.map((shirt, i) => {
      return(
        <div key={`shirt-${i}`}>
          <ShirtItem
            shirtName={shirt.name}
            shirtImage={shirt.image}
          />
          <p>{shirt.votes}</p>

          <Button
            bsStyle="success"
            onClick={ () => this.props.registerVote(shirt, team, year) }
          >
            Votar nesta camisa
          </Button>

        </div>
      )
    })
  }

  render() {
    return (
      <div>{this.shirtVoteList()}</div>
    )
  }
}

const mapStateToProps = state => ({ shirts: state.voteCamisa.shirts })
const mapsDispatchToProps = dispatch => bindActionCreators({
  registerVote
}, dispatch)

export default connect(mapStateToProps, mapsDispatchToProps)(ShirtVoteList)
