import { Actions } from 'react-native-router-flux';
import { ON_CLICK_ITEM, SHOW_SIDEMENU } from './types';

export const openProfile = () => {
    return dispatch => {
        Actions.profile();
        dispatch({
            type: ON_CLICK_ITEM,
            payload: false
        });
    };
}

export const openMemeGenerator = () => {
    return dispatch => {
        Actions.memeGenerator();
        dispatch({
            type: ON_CLICK_ITEM,
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