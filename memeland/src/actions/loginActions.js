import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ONCHAGE_USERNAME, ONCHAGE_PASSWORD, ON_LOADER_SHOW } from './types';

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

export const checkCredentials = (username, password) => {
    return dispatch => {
        dispatch({
            type: ON_LOADER_SHOW,
            payload: true
        });
        axios.post('http://35.225.86.102/signin', {
            username,
            password
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    };
}

export const openRegister = () => {
    return dispatch => {
        Actions.register();
    };
}


