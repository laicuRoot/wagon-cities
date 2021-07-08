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
  if (!props.selectedCity) {
    return (
      <div className="active-city">
        <p>Select a city...</p>
      </div>
    );
  }
  const img = `https://kitt.lewagon.com/placeholder/cities/${props.selectedCity.slug}`;
  return (
    <div className="active-city col-sm-12 d-flex text-center justify-content-center align-content-center">
      <div>
        <h3> {props.selectedCity.name} - {props.selectedCity.address} </h3>
      </div>
      <img src={img} alt="" className='w-100' />
    </div>
  );
};

function mapStateToProps(state) {
  return {
    selectedCity: state.selectedCity
  };
}


export default connect(mapStateToProps)(ActiveCity);
