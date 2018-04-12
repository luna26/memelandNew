import React, { Component } from 'react';
import { HeaderStandard, TextField, MiniButton, ButtonStandard } from '../common/';
import { ProfileImage } from './ProfileImage';
import { Text, View, ScrollView } from 'react-native';

class Profile extends Component {
    render() {
        const { profileImageContainer,
            miniButtonStyle,
            formContainerStyle,
            textInputStyle,
            mainContainerStyle,
            buttonSaveStyle,
            buttonDeleteStyle,
            deleteAccountContainer,
            text1Delete,
            text2Delete
        } = styles;

        return (
            <ScrollView style={mainContainerStyle}>
                <HeaderStandard showHamburger={false} />
                <View style={profileImageContainer}>
                    <ProfileImage />
                    <View style={miniButtonStyle}>
                        <MiniButton textLabel={'CHANGE'} />
                    </View>
                </View>
                <View style={formContainerStyle}>
                    <View style={textInputStyle}>
                        <TextField
                            text={'Email:'}
                        />
                    </View>
                    <View style={textInputStyle}>
                        <TextField
                            text={'Username:'}
                        />
                    </View>
                    <View style={textInputStyle}>
                        <TextField
                            text={'Password:'}
                        />
                    </View>
                    <View style={textInputStyle}>
                        <TextField
                            text={'Confirm Password:'}
                        />
                    </View>
                    <View style={buttonSaveStyle}>
                        <ButtonStandard textButton={'Save'} />
                    </View>
                </View>
                <View style={deleteAccountContainer}>
                    <View>
                        <Text style={text1Delete}>DELETE ACCOUNT</Text>
                        <Text style={text2Delete}>Your memes will not be deleted</Text>
                    </View>
                    <View style={buttonDeleteStyle}>
                        <ButtonStandard textButton={'DELETE ACCOUNT'} colorBtn={'#db0000'} />
                    </View>
                </View>
            </ScrollView>
        );
    }
}

const styles = {
    profileImageContainer: {
        backgroundColor: '#1a67e2',
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 25
    },
    miniButtonStyle: {
        position: 'absolute',
        right: 25,
        bottom: 10
    },
    formContainerStyle: {
        marginLeft: 30,
        marginRight: 30
    },
    textInputStyle: {
        marginTop: 20
    },
    mainContainerStyle: {
        flex: 1
    },
    buttonSaveStyle: {
        height: 70,
        marginTop: 25,
        marginBottom: 25
    },
    buttonDeleteStyle: {
        height: 70,
        marginTop: 25,
        marginBottom: 25
    },
    deleteAccountContainer: {
        paddingLeft: 30,
        paddingRight: 30,
        backgroundColor:'#D8D8D8',
        paddingTop:20
    },
    text1Delete: {
        fontSize: 30
    },
    text2Delete: {
        fontSize: 20
    }
}

export default Profile;