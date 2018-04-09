import React, {Component} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import { HeaderStandard } from '../common/';

class Home extends Component {
    render(){
        return(
            <View>
                <HeaderStandard />
                <View>
                    <Image style={{width: Dimensions.get('window').width}} source={require('../../assets/memes/meme1.jpg')}/>
                </View>
            </View>
        );
    }
}

export default Home;