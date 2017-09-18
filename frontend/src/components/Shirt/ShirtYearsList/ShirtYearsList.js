import React, { Component } from 'react'
import ShirtItem from './../ShirtItem/ShirtItem'

export default class ShirtYearsList extends Component {
  constructor(props){
    super(props)

    this.filterName = this.filterName.bind(this)
    this.shirtYearsList = this.shirtYearsList.bind(this)
  }

  filterName(obj){
    let { team } = this.props.params
    if(obj.slug === team){
      return true
    }
  }

  shirtYearsList(){
    const { data } = this.props
    const slugFilter = Array.from(data).filter(this.filterName)

    return slugFilter.map(team => {
      return team.shirtYears.map((shirts, i) => {
        return(
          <ShirtItem
            key={i}
            shirtName={shirts.name}
            shirtImage={shirts.image}
          />
        )
      })
    })
  }

  render() {
    return (
      <div>{this.shirtYearsList()}</div>
    )
  }
}
