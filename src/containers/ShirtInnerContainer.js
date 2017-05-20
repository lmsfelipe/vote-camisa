import React, { Component } from 'react';
import { connect } from 'react-redux';

import ShirtInner from './../components/Shirt/ShirtInner/ShirtInner';

class ShirtInnerContainer extends Component {
  render() {
    console.log('container', this.props.params);

    return (
      <ShirtInner params={this.props.params} />
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ShirtInnerContainer);
