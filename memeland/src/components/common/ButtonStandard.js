import React, { Component } from 'react';
import { TouchableOpacity, Text } from 'react-native';

ButtonStandard = ({ textButton, onPress, colorBtn }) => {
    const { buttonStyles, textStyle } = styles;
    return (
        <TouchableOpacity onPress={onPress} style={addColorToBtn(colorBtn)}>
            <Text style={textStyle}>
                {textButton}
            </Text>
        </TouchableOpacity>
    );
}

const addColorToBtn = (color) => {
    const { buttonStyles } = styles;
    if (color && color != undefined) {
        buttonStyles.backgroundColor = color;
        return buttonStyles;
    } else {
        return buttonStyles;
    }
}

const styles = {
    buttonStyles: {
        backgroundColor: '#2fd81d',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 50,
        flex: 1
    },
    textStyle: {
        fontSize: 35,
        color: 'white'
    }
}

export { ButtonStandard };