import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import City from './city';

import { setCities } from '../actions';


class CityList extends Component {
  componentWillMount() {
    this.props.setCities();
  }
  render() {
    return (
      <div className="cities">
        {this.props.cities.map((city) => {
          return <City key={city.name} city={city} />;
        })}
      </div>
    );
  }
}

// const CityList = ({ cities }) => {
//   useEffect(() => {
//     // Anything in here is fired on component mount.
//     setCities();
//     return () => {
//       // Anything in here is fired on component unmount.
//     };
//   }, []);

//   return (
//     <div className="cities">
//       {cities.map(({ name, address, slug }) => {
//         return <City key={name} name={name} address={address} slug={slug} />;
//       })}
//     </div>
//   );
// };

function mapStateToProps(state) {
  return {
    cities: state.cities
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setCities: setCities }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CityList);
