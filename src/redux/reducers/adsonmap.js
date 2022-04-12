const initialState = {
  adsOnMap: {},
};

const adsOnMap = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ADS_ON_MAP":
      return {
        ...state,
        adsOnMap: payload,
      };
    default:
      return state;
  }
};

export default adsOnMap;
