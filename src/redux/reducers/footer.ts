import { FooterAction, FooterActionTypes, FooterState } from "../types/footer";

const initialState: FooterState = {
  footerLinksList: [],
  footerCopyright: {},
};

const footer = (
  state = initialState,
  { type, payload }: FooterAction
): FooterState => {
  switch (type) {
    case FooterActionTypes.SET_FOOTER:
      return {
        ...state,
        footerLinksList: payload,
      };
    case FooterActionTypes.SET_FOOTER_COPYRIGHT:
      return {
        ...state,
        footerCopyright: payload,
      };

    default:
      return state;
  }
};

export default footer;
