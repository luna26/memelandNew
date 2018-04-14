import React, { Component } from 'react';
import { Text, Image, View, TextInput } from 'react-native';
import { connect } from 'react-redux';

class MemeSelected extends Component {
    render() {
        const { mainContainerStyle, imageContainerStyle, memeSelectedStyle, buttonContainer, buttonSize, textInputStyle, styleFont, textInputStyle2 } = styles;
        return (
            <View style={mainContainerStyle}>
                <View style={imageContainerStyle}>
                    <Image style={memeSelectedStyle} source={{ uri: this.props.memeGenerator.memeSelectedUri }} />
                    <View style={textInputStyle}>
                        <TextInput style={styleFont}
                        placeholder='Enter Text'
                        placeholderTextColor='white'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        multiline 
                        />
                    </View>
                    <View style={textInputStyle2}>
                        <TextInput style={styleFont}
                        placeholder='Enter Text'
                        placeholderTextColor='white'
                        underlineColorAndroid='rgba(0,0,0,0)'
                        multiline 
                        />
                    </View>
                </View>
                <View style={buttonContainer}>
                    <View style={buttonSize}>
                        <ButtonStandard textButton={"SIGUIENTE"} />
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
    imageContainerStyle: {
        flex: .75
    },
    memeSelectedStyle: {
        height: null,
        width: null,
        flex: 1
    },
    buttonContainer: {
        flex: .25,
        marginLeft: 20,
        marginRight: 20,
        justifyContent:'center'
    },
    buttonSize:{
        flex:.50
    },
    textInputStyle:{
        position:'absolute',
        left:10,
        right:10,
        top:10
    },
    styleFont:{
        fontSize:40,
        color:'white',
        textAlign:'center'
    },
    textInputStyle2:{
        position:'absolute',
        left:10,
        right:10,
        bottom:10
    }
}

const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, null)(MemeSelected);