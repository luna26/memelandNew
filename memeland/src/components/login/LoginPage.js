import React, { Component } from 'react';
import { connect } from 'react-redux';
import { onUsernameChange, onPasswordChange, openRegister, checkCredentials } from '../../actions';
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ButtonStandard, HeaderStandard, TextField } from '../common/';
import Loader from '../loader/Loader';
import { FooterColor } from '../../assets/colors';

class LoginPage extends Component {

    onUsernameChange(text) {
        this.props.onUsernameChange(text);
    }

    onPasswordChange(text) {
        this.props.onPasswordChange(text)
    }

    sendLogin() {
        const {username, password} = this.props.login;
        this.props.checkCredentials(username, password);
    }

    render() {
        const { view1, view2, mainView, mainInfoLogin, buttonLoginStyle, formStyle, view3 } = styles;
        return (
            <View style={mainView}>
                <Loader />
                <HeaderStandard showHamburger={false} />
                <View style={view2}>
                    <View style={mainInfoLogin}>
                        <View style={formStyle}>
                            <View>
                                <TextField
                                    text={'Username'}
                                    value={this.props.login.username}
                                    onChangeText={this.onUsernameChange.bind(this)}
                                />
                            </View>
                            <View style={{ marginTop: 25 }}>
                                <TextField text={'Password'}
                                    value={this.props.login.password}
                                    onChangeText={this.onPasswordChange.bind(this)}
                                    secureTextEntry={true}
                                />
                            </View>
                            <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }} onPress={this.props.openRegister}>
                                <Text>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={buttonLoginStyle}>
                            <ButtonStandard textButton={"Login"} onPress={this.sendLogin.bind(this)} />
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = {
    mainView: {
        flex: 1
    },
    view1: {
        flex: .15,
    },
    view2: {
        flex: 1
    },
    view3: {
        flex: .15,
        backgroundColor: FooterColor
    },
    mainInfoLogin: {
        flex: 1,
        marginLeft: 20,
        marginRight: 20,
    },
    formStyle: {
        flex: .90,
        paddingTop: 30,
    },
    buttonLoginStyle: {
        flex: .15,
        marginBottom: 35
    }
}


const mapStateToProps = ({ login }) => {
    return { login: login };
};

export default connect(mapStateToProps, {
    onUsernameChange,
    onPasswordChange,
    openRegister,
    checkCredentials
})(LoginPage);