import React from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../store/actions';

const AdditionalFeature = (props) => {

  return (
    <li>
      <button className="button" onClick={() => props.addFeat(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

const mapStateToProps = state => {
  return {
    car: state.car,
    additionalFeatures: state.additionalFeatures,
    additionalPrice: state.additionalPrice
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addFeat: (feature) => dispatch(addFeature(feature))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(AdditionalFeature)