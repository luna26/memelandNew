import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ON_CLICK_POPULAR, ON_LOADER_SHOW, LOAD_POPULAR_ASSETS } from './types';


//MAIN SECTIONS OF MEME GENERATOR

export const onClickPopular = () => {
    return dispatch => {
        dispatch({
            type: ON_LOADER_SHOW,
            payload: true
        });
        setTimeout(function(){
            dispatch({
                type: LOAD_POPULAR_ASSETS,
                payload: memePopular
            });
            Actions.popularAssets();
        },2000);
    };
}


//dummy object for popular memes images
const memePopular = [
    {   
        id: 1,
        name: 'meme1',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 2,
        name: 'meme2',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 3,
        name: 'meme3',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 4,
        name: 'meme4',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 5,
        name: 'meme5',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 6,
        name: 'meme6',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 7,
        name: 'meme7',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 8,
        name: 'meme8',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 9,
        name: 'meme9',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 10,
        name: 'meme10',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 11,
        name: 'meme11',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 12,
        name: 'meme12',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 13,
        name: 'meme13',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
    {   
        id: 14,
        name: 'meme14',
        url: '../../../assets/baseMemes/meme1.jpg'
    },
];