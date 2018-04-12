import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const ContainerItem = ({ children, labelText, onPress }) => {
    const { mainContainerStyle } = styles;
    return (
        <View style={mainContainerStyle}>
            {labelOrContent(children, labelText, onPress)}
        </View>
    );
}

const labelOrContent = (children, labelText, onPress) => {
    const {textStyle, textContainer} = styles;
    if (labelText != undefined && labelText != null) {
        return (
            <TouchableOpacity style={textContainer} onPress={onPress}>
                <Text style={textStyle}>{labelText}</Text>
            </TouchableOpacity>
        );
    } else {
        return (
            <View>
                {children}
            </View>
        );
    }
}

const styles = {
    mainContainerStyle: {
        borderBottomColor: 'white',
        borderBottomWidth: 1,
        paddingBottom: 20,
        paddingTop: 20
    },
    textStyle:{
        color:'white',
        fontSize:20
    },
    textContainer:{
        alignItems:'center'
    }
}

export {ContainerItem};