import React, { Component } from 'react';
import { connect } from 'react-redux';

// class ActiveCity extends Component {

//   render(props) {
//     return (
//       <div className="active-city">

//         {this.props.name}
//         {console.log(this.props.city)}
//       </div>
//     );
//   }
// }


const ActiveCity = (props) => {
  if (!props.activeCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }

  return (
    <div className="active-city">
      {console.log(props.activeCity)}
    </div>
  );
};

function mapStateToProps(state) {
  return {
    activeCity: state.activeCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
