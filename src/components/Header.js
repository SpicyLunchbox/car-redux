import React from 'react';
import { connect } from 'react-redux';

const Header = (props) => {
    return (
        <>
            
            <img src={props.car.image} alt={props.car.name} />
            
            <h2>{props.car.name}</h2>
            <p>Amount: ${props.car.price}</p>
        </>
    )
};

const mapStateToProps = state => {
    return {
      car: state.car,
      additionalFeatures: state.additionalFeatures,
      additionalPrice: state.additionalPrice
    }
  }

  export default connect(mapStateToProps, {})(Header)