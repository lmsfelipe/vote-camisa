import React, { Component } from 'react'
import ShirtItem from './../ShirtItem/ShirtItem'

export default class ShirtVoteList extends Component {
  constructor(props){
    super(props)

    this.shirtVoteList = this.shirtVoteList.bind(this)
  }

  shirtVoteList(){
    const { shirts } = this.props

    return shirts.map((shirt, i) => {
      return(
        <div key={`shirt-${i}`}>
          <ShirtItem
            shirtName={shirt.name}
            shirtImage={shirt.image}
          />
          <p>{shirt.votes}</p>
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
