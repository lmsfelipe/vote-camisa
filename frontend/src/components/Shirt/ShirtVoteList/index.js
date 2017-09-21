import React, { Component } from 'react'
import ShirtItem from './../ShirtItem/ShirtItem'

export default class ShirtVoteList extends Component {
  constructor(props){
    super(props)

    this.filterTeam = this.filterTeam.bind(this)
    this.filterYear = this.filterYear.bind(this)
    this.shirtVoteList = this.shirtVoteList.bind(this)
  }

  filterTeam(obj){
    const { team } = this.props.params
    if(obj.slug === team){
      return true
    }
  }

  filterYear(obj){
    const { year } = this.props.params
    if(obj.slug === year){
      return true
    }
  }

  shirtVoteList(){
    const { data } = this.props
    const teamFiltered = data.filter(this.filterTeam)
    let yearShirts = []

    teamFiltered.map(team => {
      yearShirts = team.shirtYears
    })

    const shirtFiltered = yearShirts.filter(this.filterYear)
    return shirtFiltered.map(year => {
      return year.shirts.map((shirt, i) => {
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
    })
  }

  render() {
    return (
      <div>{this.shirtVoteList()}</div>
    )
  }
}
