import React from "react";
import { connect } from "react-redux";
import { removeFeature } from "../actions/carActions";

const AddedFeature = (props) => {
  const onClick = (featureToRemove) => {
    props.removeFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={onClick}>
        X
      </button>
      {props.feature.name}
    </li>
  );
};

const mapStateToProps = (state) => {
  return {
    additionalPrice: state.additionalPrice,
    car: state.car,
    additionalFeatures: state.additionalFeatures,
  };
};

export default connect(mapStateToProps, { removeFeature })(AddedFeature);
