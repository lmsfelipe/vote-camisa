import React, { Component } from 'react'

import ShirtItem from './../ShirtItem'
import { Button } from 'react-bootstrap'

export default class ShirtVoteList extends Component {
  constructor(props){
    super(props)

    this.shirtVoteList = this.shirtVoteList.bind(this)
  }

  componentDidMount(){
    const { team, year } = this.props.params
    this.props.getShirts(team, year)
  }

  shirtVoteList(){
    const { team, year } = this.props.params
    const { shirts, registerVote } = this.props

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
            onClick={ () => registerVote(shirt, team, year) }
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
