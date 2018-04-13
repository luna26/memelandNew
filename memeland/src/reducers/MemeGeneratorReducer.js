import { LOAD_POPULAR_ASSETS } from '../actions/types';

const INITIAL_STATE = {
    popularAssets:null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_POPULAR_ASSETS:
            return { ...state, popularAssets: action.payload };
            break;
        default:
            return state;
    }
};
