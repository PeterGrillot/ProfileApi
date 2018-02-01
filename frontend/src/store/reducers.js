import { INCREMENT_COUNTER, DECREMENT_COUNTER, AUTH_TOKEN } from "./actions";

export default (state = {}, action) => {
  const newState = Object.assign({}, state);
  switch (action.type) {
    case INCREMENT_COUNTER:
      console.log(newState)
      newState.count++;
      return newState;
    case DECREMENT_COUNTER:
      newState.count--;
      return newState;
    case AUTH_TOKEN:
      newState.token = '0df11152c1122fbc81467dc9402b8bf8af4a2fac'
    default:
      return newState;
  }
};