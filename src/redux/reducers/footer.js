const initialState = {
  footerLinksList: [],
  footerCopyright: {},
};

const footer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_FOOTER":
      return {
        ...state,
        footerLinksList: payload,
      };
    case "SET_FOOTER_COPYRIGHT":
      return {
        ...state,
        footerCopyright: payload,
      };
    default:
      return state;
  }
};

export default footer;
