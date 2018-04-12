import React from 'react';
import {View, Image} from 'react-native';

const ProfileImage = () => {
    const {imageStyles, containerImageStyle} = styles;
    return(
        <View style={containerImageStyle}>
            <Image style={imageStyles} source={require('../../assets/memes/meme1.jpg')} />
        </View>
    );
}

const styles = {
    containerImageStyle:{
        height:190,
        width:190,
        borderRadius:150,
    },
    imageStyles: {
        height:null,
        width:null,
        flex:1,
        borderRadius:150,
    }
}

export {ProfileImage};