import { Actions } from 'react-native-router-flux';
import { ON_CLICK_ACCOUNT, SHOW_SIDEMENU } from './types';

export const openProfile = () => {
    return dispatch => {
        Actions.profile();
        dispatch({
            type: ON_CLICK_ACCOUNT,
            payload: false
        });
    };
}

export const openSideMenu = () => {
    return dispatch => {
        dispatch({
            type: SHOW_SIDEMENU,
            payload: true
        });
    };
}

export const closeSideMenu = () => {
    return dispatch => {
        dispatch({
            type: SHOW_SIDEMENU,
            payload: false
        });
    };
}