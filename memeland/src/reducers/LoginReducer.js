import { ONCHAGE_USERNAME, ONCHAGE_PASSWORD, LOGIN_LOADING } from '../actions/types';

const INITIAL_STATE = {
  username: '',
  password: '',
  loadingLogin: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ONCHAGE_USERNAME:
      return { ...state, username: action.payload };
      break;
    case ONCHAGE_PASSWORD:
      return { ...state, password: action.payload };
      break;
    case LOGIN_LOADING:
      return { ...state, loadingLogin: action.payload };
      break;
    default:
      return state;
  }
};
