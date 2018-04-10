import { SHOW_SIDEMENU } from '../actions/types';

const INITIAL_STATE = {
  showSideMenu: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SHOW_SIDEMENU:
      return { ...state, showSideMenu: action.payload };
      break;
    default:
      return state;
  }
};
