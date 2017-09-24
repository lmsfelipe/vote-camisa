import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getShirtYears } from './../actions/teamActions'
import ShirtYearsList from './../components/Shirt/ShirtYearsList/ShirtYearsList'

class ShirtYearsContainer extends Component {

  componentDidMount(){
    const { team } = this.props.params
    this.props.getShirtYears(team)
  }

  render(){
    return(
      <div>
        <ShirtYearsList
          shirtYears={this.props.shirtYears}
          team={this.props.params.team}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ shirtYears: state.voteCamisa.shirtYears })
const mapDispatchToProps = dispatch => bindActionCreators({
  getShirtYears
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ShirtYearsContainer)
