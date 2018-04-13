import { ON_LOADER_SHOW } from '../actions/types';

const INITIAL_STATE = {
    show_loading: false
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case ON_LOADER_SHOW:
            return { ...state, show_loading: action.payload };
            break;
        default:
            return state;
    }
};
