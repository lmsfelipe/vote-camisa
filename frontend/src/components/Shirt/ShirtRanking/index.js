import React, { Component } from 'react'
import ShirtItem from './../ShirtItem'

export default class index extends Component {
  constructor(props){
    super(props)

    this.shirtRanking = this.shirtRanking.bind(this)
  }

  componentDidMount(){
    this.props.getRanking()
  }

  shirtRanking(){
    const { ranking } = this.props

    return ranking.map((shirt, i) => {
      return(
        <ShirtItem
          key={i}
          shirtName={shirt.name}
          shirtImage={shirt.image}
          votes={shirt.votes}
        />
      )
    })
  }

  render() {
    return (
      <div>{this.shirtRanking()}</div>
    )
  }
}
