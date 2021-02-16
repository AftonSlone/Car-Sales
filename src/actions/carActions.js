export const SET_ADDEDFEATURE = "SET_ADDEDFEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const removeFeature = (featureToRemove) => {
  return { type: REMOVE_FEATURE, payload: featureToRemove };
};

export const setAddedFeature = (newFeature) => {
  return { type: SET_ADDEDFEATURE, payload: newFeature };
};
