import { HeaderState, setHeaderAction } from "../types/header";

const initialState = {
  header: [],
};

const SET_HEADER = "SET_HEADER";

const header = (
  state = initialState,
  { type, payload }: setHeaderAction
): HeaderState => {
  switch (type) {
    case SET_HEADER:
      return {
        ...state,
        header: payload,
      };

    default:
      return state;
  }
};

export default header;
