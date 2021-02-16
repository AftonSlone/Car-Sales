import React from "react";
import { connect } from "react-redux";
import { setAddedFeature } from "../actions/carActions";

const AdditionalFeature = (props) => {
  const onClick = (e) => {
    props.setAddedFeature(props.feature);
  };

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button className="button" onClick={onClick}>
        Add
      </button>
      {props.feature.name} (+{props.feature.price})
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

export default connect(mapStateToProps, { setAddedFeature })(AdditionalFeature);
