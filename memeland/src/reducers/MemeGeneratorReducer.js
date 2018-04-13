import { LOAD_POPULAR_ASSETS, MEME_SELECTED } from '../actions/types';

const INITIAL_STATE = {
    popularAssets: null,
    memeSelectedUri: null,
    memeSelectedName: null,
    memeSelectedId: null
};

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case LOAD_POPULAR_ASSETS:
            return { ...state, popularAssets: action.payload };
            break;
        case MEME_SELECTED:
            return { ...state, memeSelectedUri: action.payload.uri, memeSelectedName: action.payload.name, memeSelectedId: action.payload.id };
            break;
        default:
            return state;
    }
};
