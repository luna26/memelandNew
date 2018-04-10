import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';

const HeaderStandard = ({ showHamburger, onPressHamburger }) => {
    const { headerStyles, logoMainStyle, IconHamburgerStyle } = styles;
    return (
        <View style={headerStyles} >
            <TouchableOpacity style={IconHamburgerStyle} onPress={onPressHamburger}>
                {showHamburgerIcon(showHamburger)}
            </TouchableOpacity>
            <View style={logoMainStyle}>
                <Image source={require('../../assets/icons/headerMainIcon.jpg')} />
            </View>
        </View >
    );
}

const showHamburgerIcon = (showHamburger) => {
    if (showHamburger) {
        return (
            <Image source={require('../../assets/icons/hamburgerIcon.png')} />
        );
    }
}


const styles = {
    headerStyles: {
        backgroundColor: '#1a67e2',
        height: 85,
        flexDirection: 'row',
        alignItems: 'center'
    },
    logoMainStyle:{
        position:'absolute', 
        left:0, 
        right:0, 
        alignItems:'center'
    },
    IconHamburgerStyle:{
        marginLeft:10
    }
}

export { HeaderStandard };