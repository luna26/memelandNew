import { Actions } from 'react-native-router-flux';

export const goHome = () => {
    return dispatch => {
        Actions.home();
    };
}