import { LOGIN } from '../actions/type';
const INITIAL = {
  loggedIn: false,
  user: null,
};

export default (state = INITIAL, action) => {
  switch (action.type) {
    case LOGIN:
      return { ...state, loggedIn: true, user: action.payload };
    default:
      return state;
  }
};
