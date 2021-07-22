import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addFeature} from '../store/actions';

const AdditionalFeature = (props) => {
  const [isVisible, setIsVisible] = useState(false)

  const createElement = () => {
    setIsVisible(true)
  }

  return (
    <li>
      <button className="button" onClick={() => props.car.features.includes(props.feature)? createElement():props.addFeat(props.feature)}>Add</button>
      {props.feature.name} (+{props.feature.price})
      {isVisible && <p className="feature-check">Feature already added</p>}
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