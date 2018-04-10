import { REGISTER_ONCHAGE_EMAIL, REGISTER_ONCHAGE_USERNAME, REGISTER_ONCHAGE_PASSWORD, REGISTER_LOADING, REGISTER_SUCCESS } from '../actions/types';

const INITIAL_STATE = {
    registerUsername: '',
    registerEmail: '',
    registerPassword: '',
    loadingRegister: false,
    token: '',
    accessToHome:false
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
        case REGISTER_LOADING:
            return { ...state, loadingRegister: action.payload };
            break;
        case REGISTER_SUCCESS:
            return { ...state, token: action.payload, loadingRegister: false, accessToHome:true };
            break;
        default:
            return state;
    }
};
