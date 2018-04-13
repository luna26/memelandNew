import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';
import RegisterReducer from './RegisterReducer';
import SideMenuReducer from './SideMenuReducer';
import LoaderReducer from './LoaderReducer';

export default combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  register: RegisterReducer,
  sideMenu: SideMenuReducer,
  loader: LoaderReducer
});
