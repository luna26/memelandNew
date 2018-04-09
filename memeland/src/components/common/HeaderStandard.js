import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';

const HeaderStandard = () => {
    const {headerStyles} = styles;
    return(
        <View style={headerStyles}>

        </View>
    );
}

const styles = {
    headerStyles: {
        backgroundColor: '#1a67e2',
        height:85
    }
}

export {HeaderStandard};