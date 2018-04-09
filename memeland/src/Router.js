import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginPage from './components/login/LoginPage'
import Home from './components/home/Home';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key='root'>
                <Scene key="loginPage" component={LoginPage} hideNavBar={true} initial/>
                <Scene key="home" component={Home} hideNavBar={true} />
            </Stack>
        </Router>
    );
};


export default RouterComponent;
