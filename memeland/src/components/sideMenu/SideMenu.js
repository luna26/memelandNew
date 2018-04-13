import React from 'react';
import { connect } from 'react-redux';
import { openProfile, openMemeGenerator, closeSideMenu } from '../../actions';
import { View, Text } from 'react-native';
import { HeaderSideMenu } from './HeaderSideMenu';
import { ContainerItem } from './ContainerItem';

const SideMenu = (props) => {
    console.log(props);
    return (
            showSideMenu(props)
    );
}

const showSideMenu = ({ openProfile, closeSideMenu, openMemeGenerator, stateSideMenu}) => {
    const { sideMenuStyle, containerMenuStyle } = styles;
    if (stateSideMenu.sideMenu.showSideMenu) {
        return (
            <View style={sideMenuStyle}>
                <View style={containerMenuStyle}>
                    <ContainerItem>
                        <HeaderSideMenu accountNameLabel={'Account Name'} pointsLabel={'300 points'} />
                    </ContainerItem>
                    <ContainerItem labelText={'MEME GENERATOR'} onPress={openMemeGenerator} />
                    <ContainerItem labelText={'INVITE A FRIEND'} />
                    <ContainerItem labelText={'ACCOUNT'} onPress={openProfile} />
                    <ContainerItem labelText={'CLOSE'} onPress={closeSideMenu} />
                </View>
            </View>
        );
    }else{
        return(<View></View>);
    }
}

const styles = {
    sideMenuStyle: {
        position: 'absolute',
        backgroundColor: '#b3b3b3',
        flex: 1,
        right: 75,
        left: 0,
        top: 0,
        bottom: 0,
        zIndex: 1
    },
    containerMenuStyle: {
        marginLeft: 20,
        marginRight: 20
    }
}

const mapStateToProps = (stateSideMenu) => {
    return { stateSideMenu: stateSideMenu };
};


export default connect(mapStateToProps, { openProfile, openMemeGenerator, closeSideMenu })(SideMenu);
