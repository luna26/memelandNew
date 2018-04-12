import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginPage from './components/login/LoginPage'
import Home from './components/home/Home';
import RegisterPage from './components/login/RegisterPage';
import Profile from './components/profile/Profile';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key='root'>
                <Scene key="loginPage" component={LoginPage} hideNavBar={true} />
                <Scene key="register" component={RegisterPage} hideNavBar={true}  />
                <Scene key="home" component={Home} hideNavBar={true}  initial/>
                <Scene key="profile" component={Profile} hideNavBar={true} />
            </Stack>
        </Router>
    );
};


export default RouterComponent;
