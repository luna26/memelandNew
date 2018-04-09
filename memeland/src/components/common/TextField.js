import React from 'react';
import {Text, View, TextInput} from 'react-native';
import { FooterColor } from '../../assets/colors';

const TextField = ({text}) => {
    const {textInputStyle, textStyle} = styles;
    return(
        <View>
            <Text style={textStyle}>
                {text}
            </Text>
            <View style={textInputStyle}>
                <TextInput 
                    underlineColorAndroid='rgba(0,0,0,0)'
                />
            </View>
        </View>
    )
}

const styles = {
    textInputStyle:{
        backgroundColor:'white',
        marginTop:10,
        borderColor: FooterColor,
        borderWidth: 1
    },
    textStyle:{
        fontSize:15
    }
}

export {TextField};