import React from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';

const Item = ({item, onPress}) => {
    const {imageStyle, containerImage} = styles
    return(
        <TouchableOpacity style={containerImage} onPress={onPress.bind(this, item.id, item.name, item.url)}>
            <Image resizeMode='stretch' style={imageStyle} source={{uri: item.url}}/>
        </TouchableOpacity>
    );
}

const styles = {
    containerImage:{
        height:200,
        width:null

    },
    imageStyle:{
        height:null,
        width:null, 
        flex:1
    }
}

export {Item};