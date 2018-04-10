import React, { Component } from 'react';
import { connect } from 'react-redux';
import { registerOnEmailChange, registerOnUsernameChange, registerOnPasswordChange, sendRegisterRequest, goHome } from '../../actions';
import { View } from 'react-native';
import { ButtonStandard, HeaderStandard, TextField, Loader } from '../common/';

class RegisterPage extends Component {

    registerOnEmailChange(text) {
        this.props.registerOnEmailChange(text)
    }

    registerOnUsernameChange = (text) => {
        this.props.registerOnUsernameChange(text)
    }

    registerOnPasswordChange = (text) => {
        this.props.registerOnPasswordChange(text)
    }

    sendRegisterRequest() {
        const { registerEmail, registerUsername, registerPassword } = this.props.register;
        this.props.sendRegisterRequest(registerEmail, registerUsername, registerPassword);
    }

    showLoader() {
        if (this.props.register.loadingRegister) {
            return (
                <Loader />
            );
        }
    }

    componentDidUpdate() {
        if(this.props.register.accessToHome) this.props.goHome();
    }

    render() {
        const { formContentStyle, buttonContainerStyle, field } = styles;
        return (
            <View style={{ flex: 1 }}>
                {this.showLoader()}
                <HeaderStandard />
                <View style={formContentStyle}>
                    <View>
                        <TextField text={'Email:'}
                            onChangeText={this.registerOnEmailChange.bind(this)}
                            value={this.props.register.registerEmail}
                        />
                    </View>
                    <View style={field}>
                        <TextField text={'Username:'}
                            onChangeText={this.registerOnUsernameChange.bind(this)}
                            value={this.props.register.registerUsername}
                        />
                    </View>
                    <View style={field}>
                        <TextField text={'Password:'}
                            onChangeText={this.registerOnPasswordChange.bind(this)}
                            value={this.props.register.registerPassword}
                            secureTextEntry={true}
                        />
                    </View>
                    <View style={field}>
                        <TextField text={'Confirm Password:'} />
                    </View>
                    <View style={{ flex: 1, justifyContent: "flex-end" }}>
                        <View style={buttonContainerStyle}>
                            <ButtonStandard textButton={"REGISTER"} onPress={this.sendRegisterRequest.bind(this)} />
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = {
    formContentStyle: {
        marginLeft: 25,
        marginRight: 25,
        marginTop: 20,
        flex: 1,
    },
    buttonContainerStyle: {
        flex: .35,
        marginBottom: 25
    },
    field: {
        marginTop: 13
    }

}


const mapStateToProps = ({ register }) => {
    return { register: register };
};

export default connect(mapStateToProps, {
    registerOnEmailChange,
    registerOnUsernameChange,
    registerOnPasswordChange,
    sendRegisterRequest,
    goHome
})(RegisterPage);