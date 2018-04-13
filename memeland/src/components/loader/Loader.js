import React from 'react';
import { connect } from 'react-redux';
import { Text, View, ActivityIndicator } from 'react-native';

const Loader = ({loader}) => {
    return (
        showLoader(loader)
    );
}

const showLoader = ({show_loading}) => {
    const { mainContainer } = styles;
    if (show_loading) {
        return (
            <View style={mainContainer}>
                <ActivityIndicator size='large' color='#0000ff' />
            </View>
        );
    } else {
        return(null);
    }
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
        alignItems: 'center',
        justifyContent: 'center'
    }
}

const mapStateToProps = ({ loader }) => {
    return { loader: loader };
};

export default connect(mapStateToProps, null)(Loader);