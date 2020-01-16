import { LOAD_OWNERS_AND_OBITUARIES } from "constants/ActionTypes";

const INIT_STATE = {
  obituaries: [],
  owners: [],
  matches: []
};

export default (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOAD_OWNERS_AND_OBITUARIES: {
      return {
        ...state,
        obituaries: action.payload.obituaries,
        owners: action.payload.owners
      };
    }

    default:
      return state;
  }
};
