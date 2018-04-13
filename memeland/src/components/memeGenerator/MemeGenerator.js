import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text, Image } from 'react-native';
import { ButtonStandard, HeaderStandard } from '../common/';
import {onClickPopular} from '../../actions';
import Loader from '../loader/Loader';

class MemeGenerator extends Component {
    render() {
        const { buttonsContainer,
            headerIndicator,
            mainContainerStyle,
            buttonSizeStyle,
            indicatorImage } = styles;

        return (
            <View style={mainContainerStyle}>
                <Loader />
                <HeaderStandard showHamburger={false} />
                <View style={headerIndicator}>
                    <Image style={indicatorImage} source={require('../../assets/stepsIndicator/step1.png')} />
                </View>
                <View style={buttonsContainer}>
                    <View style={buttonSizeStyle}>
                        <ButtonStandard textButton={"POPULAR"} onPress={this.props.onClickPopular}/>
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

const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, {onClickPopular})(MemeGenerator);