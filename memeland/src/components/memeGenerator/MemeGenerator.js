import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import { ButtonStandard, HeaderStandard } from '../common/';

class MemeGenerator extends Component {
    render() {
        const { buttonsContainer,
            headerIndicator,
            mainContainerStyle,
            buttonSizeStyle,
            indicatorImage } = styles;

        return (
            <View style={mainContainerStyle}>
                <HeaderStandard showHamburger={false} />
                <View style={headerIndicator}>
                    <Image style={indicatorImage} source={require('../../assets/stepsIndicator/step1.png')} />
                </View>
                <View style={buttonsContainer}>
                    <View style={buttonSizeStyle}>
                        <ButtonStandard textButton={"POPULAR"} />
                    </View>
                    <View style={buttonSizeStyle}>
                        <ButtonStandard textButton={"MY ASSETS"} />
                    </View>
                    <View style={buttonSizeStyle}>
                    </View>
                    <View style={buttonSizeStyle}>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainerStyle: {
        flex: 1
    },
    buttonsContainer: {
        flex: .85,
        justifyContent: 'space-around',
        paddingTop: 10
    },
    headerIndicator: {
        backgroundColor: '#f2f2',
        flex: .15
    },
    buttonSizeStyle: {
        flex: .16,
        marginLeft: 20,
        marginRight: 20
    },
    indicatorImage:{
        height:null,
        width:null,
        flex:1,
    }
}

export default MemeGenerator;