import { Actions } from 'react-native-router-flux';
import {ONCHAGE_USERNAME, ONCHAGE_PASSWORD} from './types';

export const goHome = () => {
    return dispatch => {
        Actions.home();
    };
}

export const onUsernameChange = (text) => {
    return dispatch => {
        dispatch({
            type: ONCHAGE_USERNAME,
            payload: text
        });
    };
}

export const onPasswordChange = (text) => {
    return dispatch => {
        dispatch({
            type: ONCHAGE_PASSWORD,
            payload: text
        });
    };
}

export const checkCredentials = (user, password) =>{

}

export const registerUser = () => {

}

export const openRegister = () => {
    return dispatch => {
        Actions.register();
    };
}


