import React, { Component } from 'react'
import { Link } from 'react-router'

import ShirtItem from './../ShirtItem'

export default class ShirtYearsList extends Component {
  constructor(props){
    super(props)

    this.shirtYearsList = this.shirtYearsList.bind(this)
  }

  componentDidMount(){
    const { team } = this.props.params
    this.props.getShirtYears(team)
  }

  shirtYearsList(){
    const { team } = this.props.params
    const { shirtYears } = this.props

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
