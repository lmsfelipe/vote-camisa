import React, { Component } from 'react'
import { Link } from 'react-router'

import ShirtItem from './../ShirtItem/ShirtItem'

export default class ShirtYearsList extends Component {
  constructor(props){
    super(props)

    this.shirtYearsList = this.shirtYearsList.bind(this)
  }

  shirtYearsList(){
    const { shirtYears, team } = this.props

    return shirtYears.map((shirts, i) => {
      return(
        <Link
          key={i}
          to={`/${team}/${shirts.slug}`}
        >
          <ShirtItem
            shirtName={shirts.name}
            shirtImage={shirts.image}
          />
        </Link>
      )
    })
  }

  render() {
    return (
      <div>{this.shirtYearsList()}</div>
    )
  }
}
