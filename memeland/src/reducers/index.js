import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';
import RegisterReducer from './RegisterReducer';
import SideMenuReducer from './SideMenuReducer';
import LoaderReducer from './LoaderReducer';
import MemeGeneratorReducer from './MemeGeneratorReducer';

export default combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  register: RegisterReducer,
  sideMenu: SideMenuReducer,
  loader: LoaderReducer,
  memeGenerator:MemeGeneratorReducer
});
