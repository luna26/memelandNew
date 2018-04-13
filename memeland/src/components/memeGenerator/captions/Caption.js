import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, Image } from 'react-native';
import { HeaderStandard, ButtonStandard } from '../../common/';
import MemeSelected from './MemeSelected';

class Caption extends Component {
    render() {
        console.log(this.props);
        const {headerIndicator, mainContainer, indicatorImage, memeSetectedStyle} = styles;
        return (
            <View style={mainContainer}>
                <HeaderStandard showHamburger={false} />
                <View style={headerIndicator}>
                    <Image style={indicatorImage} source={require('../../../assets/stepsIndicator/step3.png')} />
                </View>
                <View style={memeSetectedStyle}>
                    <MemeSelected />
                </View>
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1
    },
    headerIndicator: {
        flex: .15
    },
    indicatorImage: {
        height: null,
        width: null,
        flex: 1,
    },
    memeSetectedStyle:{
        flex:1
    }
}

const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, null)(Caption);

