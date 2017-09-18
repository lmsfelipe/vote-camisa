import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getApiData } from './../actions/teamActions'
import ShirtYearsList from './../components/Shirt/ShirtYearsList/ShirtYearsList'

class ShirtYearsContainer extends Component {

  componentDidMount(){
    this.props.getApiData()
  }

  render(){
    return(
      <div>
        <ShirtYearsList
          params={this.props.params}
          data={this.props.data}
        />
      </div>
    )
  }
}

const mapStateToProps = state => ({ data: state.teams.data })
const mapDispatchToProps = dispatch => bindActionCreators({
  getApiData
}, dispatch)
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ShirtYearsContainer)
