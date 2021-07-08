import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { activeCity } from '../actions/index';

class City extends Component {
  handleClick = () => {
    this.props.activeCity(this.props.city);
  }

  render() {
    let classes = 'list-group-item';
    if ( this.props.city === this.props.selectedCity) {
      classes += ' selected';
    }
    return (
      <div onClick={this.handleClick} className={classes} role="button">
        {this.props.city.name}

      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ activeCity: activeCity }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(City);
