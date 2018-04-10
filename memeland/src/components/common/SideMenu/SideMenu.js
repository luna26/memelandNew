import React from 'react';
import { View, Text } from 'react-native';
import { HeaderSideMenu } from './HeaderSideMenu';
import { ContainerItem } from './ContainerItem';

const SideMenu = ({onPressClose}) => {
    const { sideMenuStyle, containerMenuStyle } = styles;
    return (
        <View style={sideMenuStyle}>
            <View style={containerMenuStyle}>
                <ContainerItem>
                    <HeaderSideMenu accountNameLabel={'Account Name'} pointsLabel={'300 points'} />
                </ContainerItem>
                <ContainerItem labelText={'MEME GENERATOR'}/>
                <ContainerItem labelText={'INVITE A FRIEND'}/>
                <ContainerItem labelText={'ACCOUNT'}/>
                <ContainerItem labelText={'CERRAR'} onPress={onPressClose}/>
            </View>
        </View>
    );
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
export { SideMenu };
