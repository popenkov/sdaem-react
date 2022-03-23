import { HeaderState, setHeaderAction } from "../types/header";

// interface HeaderObject {
//   headerTop: any[];
//   headerBottom: any[];
// }
const initialState: HeaderState = {
  header: {},

  /*  headerTop: [],
  headerBottom: [], */
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
    /* case SET_HEADER_TOP:
      return {
        ...state,
        header: payload,
      };

    case SET_HEADER_BOTTOM:
      return {
        ...state,
        header: payload,
      };
 */
    default:
      return state;
  }
};

export default header;
