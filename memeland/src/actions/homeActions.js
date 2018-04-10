import { Actions } from 'react-native-router-flux';
import {SHOW_SIDEMENU} from '../actions/types';

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