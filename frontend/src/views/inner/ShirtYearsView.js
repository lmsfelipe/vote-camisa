import React, { Component } from 'react'

import ShirtYearsContainer from './../../containers/ShirtYearsContainer'

export default class ShirtYearsView extends Component {
  render() {
    return (
      <div>
        <ShirtYearsContainer params={this.props.params} />
      </div>
    )
  }
}
