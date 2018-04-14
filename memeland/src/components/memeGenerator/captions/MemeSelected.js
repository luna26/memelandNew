import React, { Component } from 'react';
import Marker from 'react-native-image-marker';
import { Text, Image, View, TextInput, Platform, CameraRoll } from 'react-native';
import { connect } from 'react-redux';

class MemeSelected extends Component {
    markImage() {
        let dir2 = '/storage/emulated/0/DCIM/Camera/IMG_20180413_213337.jpg';
        // Marker.markText({
        //     src: Platform.OS == 'android' ? dir2.replace('file://', '') : dir2,
        //     text: 'text markerwww',
        //     X: 250,
        //     Y: 250,
        //     color: 'white',
        //     fontName: 'Arial-BoldItalicMT',
        //     fontSize: 75,
        //     scale: 1,
        //     quality: 100
        // }).then((res) => {
        //     Marker.markText({
        //         src: Platform.OS == 'android' ? res.replace('file://', '') : res,
        //         text: 'text marker 2',
        //         position: 'bottomCenter',
        //         color: 'white',
        //         fontName: 'Arial-BoldItalicMT',
        //         fontSize: 75,
        //         scale: 1,
        //         quality: 100
        //     }).then((res) => {
        //         CameraRoll.saveToCameraRoll(res);
        //         test = res;
        //     }).catch((err) => {RR
        //         console.log(err)
        //     })
        // }).catch((err) => {
        //     console.log(err)
        // })
         let test = this.setText(dir2, 'VAMOS A PROBAR', 250, 250, true);
         console.log(test, 'si');
    }

    setText(url, text, X, Y, save) {
        Marker.markText({
            src: Platform.OS == 'android' ? url.replace('file://', '') : url,
            text: text,
            X: X,
            Y: Y,
            color: 'white',
            fontName: 'Arial-BoldItalicMT',
            fontSize: 75,
            scale: 1,
            quality: 100
        }).then((res) => {
            if(save){
                CameraRoll.saveToCameraRoll(res);
            }
            tempUrl = res;
        }).catch((err) => {
            console.log(err)
        })
    }

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
                        <ButtonStandard textButton={"SIGUIENTE"} onPress={this.markImage.bind(this, this.props.memeGenerator.memeSelectedUri)} />
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
        justifyContent: 'center'
    },
    buttonSize: {
        flex: .50
    },
    textInputStyle: {
        position: 'absolute',
        left: 10,
        right: 10,
        top: 10
    },
    styleFont: {
        fontSize: 40,
        color: 'white',
        textAlign: 'center'
    },
    textInputStyle2: {
        position: 'absolute',
        left: 10,
        right: 10,
        bottom: 10
    }
}

const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, null)(MemeSelected);