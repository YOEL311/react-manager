import {
  EMPLOYEES_FETCH_SUCCESS,
  EMPLOYEES_SAVE_SUCCESS,
} from "../actions/types";

const INITIAL_STATE = {};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EMPLOYEES_FETCH_SUCCESS:
      console.log(action);
      // return { ...state, [id]: action.payload };
      return action.payload;
    case EMPLOYEES_SAVE_SUCCESS:
      return INITIAL_STATE;
    default:
      return state;
  }
};
