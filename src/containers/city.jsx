import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import selectCity from '../actions/index';

// class City extends Component {
//   handleClick = () => {
//     this.props.selectCity(this.props.city);
//   }

//   render() {
//     return (
//       <div onClick={this.handleClick} className="list-group-item" role="button">
//         {this.props.city.name}
//       </div>
//     );
//   }
// }

const City = (props) => {

  // const handleClick = () => {
  //   props.selectCity(props.city);
  // }

  return (
    <div onClick={() => props.selectCity(props.city)} className="list-group-item">
      {props.city.name}
    </div>
  );
};

// function mapStateToProps(state) {
//   return {
//     city: state.city
//   };
// // }

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ selectCity: selectCity }, dispatch);
}

export default connect(null, mapDispatchToProps)(City);
