import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import activeCity from '../actions/index';

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city);
  }

  render() {
    return (
      <div onClick={this.handleClick} className="list-group-item" role="button">
        {this.props.city.name}
      </div>
    );
  }
}

// function mapStateToProps(state) {
//   return {
//     city: state.city
//   };
// // }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeCity: activeCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
