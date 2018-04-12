import React from 'react';
import {Text, TouchableOpacity} from 'react-native';

const MiniButton = ({textLabel, onPress}) => {
    const {buttonContainer, textStyle} = styles;
    return(
        <TouchableOpacity style={buttonContainer} onPress={onPress}>
            <Text style={textStyle}>
                {textLabel}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonContainer:{
        backgroundColor:'#2fd81d',
        paddingTop:4,
        paddingBottom:4,
        paddingLeft:20,
        paddingRight:20,
        borderRadius:10
    },
    textStyle:{
        color:'white'
    }
}

export {MiniButton}