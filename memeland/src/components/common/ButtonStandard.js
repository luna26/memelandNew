import React, {Component} from 'react';
import {TouchableOpacity, Text} from 'react-native';

ButtonStandard = ({textButton, onPress}) => {
    const {buttonStyles, textStyle} = styles;
    return(
        <TouchableOpacity onPress={onPress} style={buttonStyles}>
            <Text style={textStyle}>
                {textButton}
            </Text>
        </TouchableOpacity>
    );
}

const styles = {
    buttonStyles:{
        backgroundColor:'#2fd81d',
        alignItems:'center',
        justifyContent:'center',
        borderRadius:50,
        flex:1
    },
    textStyle:{
        fontSize:35,
        color:'white'
    }
}

export {ButtonStandard};