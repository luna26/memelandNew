import React from 'react';
import { View } from 'react-native';
import { Scene, Router, Stack } from 'react-native-router-flux';
import LoginPage from './components/login/LoginPage'
import Home from './components/home/Home';
import RegisterPage from './components/login/RegisterPage';
import Profile from './components/profile/Profile';
import MemeGenerator from './components/memeGenerator/MemeGenerator';
import Popular from './components/memeGenerator/popular/Popular';
import Caption from './components/memeGenerator/captions/Caption';

const RouterComponent = () => {
    return (
        <Router >
            <Stack key='root'>
                <Scene key="loginPage" component={LoginPage} hideNavBar={true} initial/>
                <Scene key="register" component={RegisterPage} hideNavBar={true}  />
                <Scene key="home" component={Home} hideNavBar={true} initial/>
                <Scene key="profile" component={Profile} hideNavBar={true} />
                <Scene key="memeGenerator" component={MemeGenerator} hideNavBar={true} />
                <Scene key="popularAssets" component={Popular} hideNavBar={true} />
                <Scene key="caption" component={Caption} hideNavBar={true} />
            </Stack>
        </Router>
    );
};


export default RouterComponent;
