import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ON_CLICK_POPULAR } from './types';

export const onClickPopular = () => {
    return dispatch => {
        dispatch({
            type: ONCHAGE_USERNAME,
            payload: text
        });
    };
}