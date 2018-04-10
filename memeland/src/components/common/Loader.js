import React from 'react';
import { Text, View, ActivityIndicator } from 'react-native';

const Loader = () => {
    const { mainContainer } = styles;
    return (
        <View style={mainContainer}>
            <ActivityIndicator size="large" color="#0000ff" />
        </View>
    );
}

const styles = {
    mainContainer: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(168,168,168,0.49)',
        zIndex: 1,
        alignItems:'center',
        justifyContent:'center'
    }
}

export { Loader };