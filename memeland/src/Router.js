import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginPage from './components/login/LoginPage'


const RouterComponent = () => {
    return (
        <Router >
            <Stack key='root'>
                <Scene key="loginPage" component={LoginPage} hideNavBar={true} initial/>
            </Stack>
        </Router>
    );
};


export default RouterComponent;
