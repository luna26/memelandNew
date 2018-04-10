import { combineReducers } from 'redux';
import LoginReducer from './LoginReducer';
import HomeReducer from './HomeReducer';
import RegisterReducer from './RegisterReducer';

export default combineReducers({
  login: LoginReducer,
  home: HomeReducer,
  register: RegisterReducer
});
