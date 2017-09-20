import React, { Component } from 'react'
import { Link } from 'react-router'

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
    const { team } = this.props.params
    const slugFilter = data.filter(this.filterName)

    return slugFilter.map(teamInfo => {
      return teamInfo.shirtYears.map((shirts, i) => {
        return(
          <Link
            key={i}
            to={`/${team}/${shirts.slug}`}
          >
            <ShirtItem
              key={i}
              shirtName={shirts.name}
              shirtImage={shirts.image}
            />
          </Link>
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
