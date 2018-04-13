import axios from 'axios';
import { REGISTER_ONCHAGE_EMAIL, REGISTER_ONCHAGE_USERNAME, REGISTER_ONCHAGE_PASSWORD, ON_LOADER_SHOW, REGISTER_SUCCESS } from './types';

export const registerOnEmailChange = (text) => {
    return dispatch => {
        dispatch({
            type: REGISTER_ONCHAGE_EMAIL,
            payload: text
        });
    };
}

export const registerOnUsernameChange = (text) => {
    return dispatch => {
        dispatch({
            type: REGISTER_ONCHAGE_USERNAME,
            payload: text
        });
    };
}

export const registerOnPasswordChange = (text) => {
    return dispatch => {
        dispatch({
            type: REGISTER_ONCHAGE_PASSWORD,
            payload: text
        });
    };
}

export const sendRegisterRequest = (email, username, password) => {
    return dispatch => {
        dispatch({
            type: ON_LOADER_SHOW,
            payload: true
        });
        axios.post('http://35.225.86.102/signup', {
            username,
            password
        })
            .then(function (response) {
                axios.post('http://35.225.86.102/signin', {
                    username,
                    password
                })
                    .then(function (response) {
                        setTimeout(function(){
                            dispatch({
                                type: REGISTER_SUCCESS,
                                payload: response.data.token
                            });
                        },100);

                    })
                    .catch(function (error) {
                        console.log(error);
                    });

            })
            .catch(function (error) {
                console.log(error);
            });
    };
}