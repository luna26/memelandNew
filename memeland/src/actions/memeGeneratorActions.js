import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { ON_CLICK_POPULAR, ON_LOADER_SHOW, LOAD_POPULAR_ASSETS, MEME_SELECTED } from './types';


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
            dispatch({
                type: ON_LOADER_SHOW,
                payload: false
            });
            Actions.popularAssets();
        },2000);
    };
}



//POPULAR SECTION

export const memeSelectedAction = (id, name, uri) => {
    return dispatch => {
        dispatch({
            type: MEME_SELECTED,
            payload: 
            {
                id : id,
                name : name,
                uri : uri
            }
        });
        Actions.caption();
    };
}

//dummy object for popular memes images
export const memePopular = [
    {   
        id: 1,
        name: 'meme1',
        url: 'https://i.pinimg.com/originals/99/a6/64/99a66457d486cfb4c45130049d736b26.jpg'
    },
    {   
        id: 2,
        name: 'meme2',
        url: 'http://memeschistosos.net/wp-content/uploads/2016/03/imagenes-para-crear-memes5.png'
    },
    {   
        id: 3,
        name: 'meme3',
        url: 'https://i.pinimg.com/originals/6f/93/f1/6f93f12ee8dd0765930702606d850ab0.jpg'
    },
    {   
        id: 4,
        name: 'meme4',
        url: 'https://i.imgur.com/tLIf7wr.jpg'
    },
    {   
        id: 5,
        name: 'meme1',
        url: 'https://i.pinimg.com/originals/99/a6/64/99a66457d486cfb4c45130049d736b26.jpg'
    },
    {   
        id: 6,
        name: 'meme2',
        url: 'http://memeschistosos.net/wp-content/uploads/2016/03/imagenes-para-crear-memes5.png'
    },
    {   
        id: 7,
        name: 'meme3',
        url: 'https://i.pinimg.com/originals/6f/93/f1/6f93f12ee8dd0765930702606d850ab0.jpg'
    },
    {   
        id: 8,
        name: 'meme4',
        url: 'https://i.imgur.com/tLIf7wr.jpg'
    }, {   
        id: 9,
        name: 'meme1',
        url: 'https://i.pinimg.com/originals/99/a6/64/99a66457d486cfb4c45130049d736b26.jpg'
    },
    {   
        id: 10,
        name: 'meme2',
        url: 'http://memeschistosos.net/wp-content/uploads/2016/03/imagenes-para-crear-memes5.png'
    },
    {   
        id: 11,
        name: 'meme3',
        url: 'https://i.pinimg.com/originals/6f/93/f1/6f93f12ee8dd0765930702606d850ab0.jpg'
    },
    {   
        id: 12,
        name: 'meme4',
        url: 'https://i.imgur.com/tLIf7wr.jpg'
    }, {   
        id: 13,
        name: 'meme1',
        url: 'https://i.pinimg.com/originals/99/a6/64/99a66457d486cfb4c45130049d736b26.jpg'
    },
    {   
        id: 14,
        name: 'meme2',
        url: 'http://memeschistosos.net/wp-content/uploads/2016/03/imagenes-para-crear-memes5.png'
    },
    {   
        id: 15,
        name: 'meme3',
        url: 'https://i.pinimg.com/originals/6f/93/f1/6f93f12ee8dd0765930702606d850ab0.jpg'
    },
    {   
        id: 16,
        name: 'meme4',
        url: 'https://i.imgur.com/tLIf7wr.jpg'
    },
];