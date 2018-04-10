import { REGISTER_ONCHAGE_EMAIL, REGISTER_ONCHAGE_USERNAME, REGISTER_ONCHAGE_PASSWORD } from '../actions/types';

const INITIAL_STATE = {
    registerUsername: '',
    registerEmail: '',
    registerPassword: ''
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case REGISTER_ONCHAGE_EMAIL:
            return { ...state, registerEmail: action.payload };
            break;
        case REGISTER_ONCHAGE_USERNAME:
            return { ...state, registerUsername: action.payload };
            break;
        case REGISTER_ONCHAGE_PASSWORD:
            return { ...state, registerPassword: action.payload };
            break;
        default:
            return state;
    }
};
