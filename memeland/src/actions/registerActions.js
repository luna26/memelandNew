import {REGISTER_ONCHAGE_EMAIL, REGISTER_ONCHAGE_USERNAME, REGISTER_ONCHAGE_PASSWORD} from './types';

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