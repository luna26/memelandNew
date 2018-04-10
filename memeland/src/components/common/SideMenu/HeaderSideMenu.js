import React from 'react';
import {View, Text, Image} from 'react-native';

const HeaderSideMenu = ({accountNameLabel, pointsLabel}) => {
    const {sideMenuHeaderStyle, textContainerStyle, textStyle1, textStyle2, styleImage} = styles;
    return(
        <View style={sideMenuHeaderStyle}>
            <Image style={styleImage} source={require('../../../assets/icons/iconMemeDark.png')}/>
            <View style={textContainerStyle}>
                <Text style={textStyle1}>{accountNameLabel}</Text>
                <Text style={textStyle2}>{pointsLabel}</Text>
            </View>
        </View>
    );
}

const styles = {
    sideMenuHeaderStyle:{
        flexDirection:'row'
    },
    textContainerStyle:{
        justifyContent:'center',
        marginLeft:10
    },
    textStyle1:{
        color:'white',
        fontSize:20
    },
    textStyle2:{
        color:'white'
    },
    styleImage:{
        width:60,
        height:60
    }
}
export {HeaderSideMenu};
