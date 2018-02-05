import { ADD_TOKEN } from "./actions";

export default (state = {}, action) => {
  switch (action.type) {
    case ADD_TOKEN:
      return {token: action.token}
    default:
      return state;
  }
};