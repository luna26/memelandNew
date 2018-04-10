import React from 'react';
import { Text, View, TextInput } from 'react-native';
import { FooterColor } from '../../assets/colors';

const TextField = ({ text, value, onChangeText, secureTextEntry }) => {
    const { textInputStyle, textStyle } = styles;
    return (
        <View>
            <Text style={textStyle}>
                {text}
            </Text>
            <View style={textInputStyle}>
                <TextInput
                    value={value}
                    onChangeText={onChangeText}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    secureTextEntry={secureTextEntry}
                />
            </View>
        </View>
    )
}

const styles = {
    textInputStyle: {
        backgroundColor: 'white',
        marginTop: 2,
        borderColor: FooterColor,
        borderWidth: 1
    },
    textStyle: {
        fontSize: 15
    }
}

export { TextField };