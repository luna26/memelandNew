import React, { Component } from 'react';
import { connect } from 'react-redux';
import { goHome } from '../../actions';
import { Text, View, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { ButtonStandard, HeaderStandard, TextField } from '../common/';
import { FooterColor } from '../../assets/colors';

class LoginPage extends Component {
    render() {
        const { view1, view2, mainView, mainInfoLogin, buttonLoginStyle, formStyle, view3 } = styles;
        return (
                <View style={mainView}>
                    <HeaderStandard />
                    <View style={view2}>
                        <View style={mainInfoLogin}>
                            <View style={formStyle}>
                                <View>
                                    <TextField text={'Username'} />
                                </View>
                                <View style={{ marginTop: 25 }}>
                                    <TextField text={'Password'} />
                                </View>
                                <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }}>
                                    <Text>Register</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={buttonLoginStyle}>
                                <ButtonStandard textButton={"Login"} onPress={this.props.goHome} />
                            </View>
                        </View>
                    </View>
                    <View style={view3}>
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
        backgroundColor: '#f2f'
    },
    view2: {
        flex: .85
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
        flex: .80,
        paddingTop: 30
    },
    buttonLoginStyle: {
        flex: .20,
        marginBottom: 20
    }
}


const mapStateToProps = ({ state }) => {
    return { state };
};

export default connect(mapStateToProps, { goHome })(LoginPage);