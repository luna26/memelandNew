import React, {Component} from 'react';
import { connect } from 'react-redux';
import { openSideMenu, closeSideMenu } from '../../actions';
import {View, Text, Image, Dimensions} from 'react-native';
import { HeaderStandard, SideMenu } from '../common/';

class Home extends Component {
    render(){
        const {homeContainer} = styles;
        console.log('ESTE', this.props);
        return(
            <View style={homeContainer}>
                {this.showSideMenu()}
                <HeaderStandard showHamburger={true} onPressHamburger={this.props.openSideMenu}/>
                <View>
                    <Image style={{width: Dimensions.get('window').width}} source={require('../../assets/memes/meme1.jpg')}/>
                </View>
            </View>
        );
    }

    showSideMenu(){
        if(this.props.home.showSideMenu){
            return(
                <SideMenu onPressClose={this.props.closeSideMenu}/>
            );
        }
    }
}

const styles = {
    homeContainer:{
        flex:1
    }
}

const mapStateToProps = ({home}) => {
    return { home:home };
};

export default connect(mapStateToProps, { openSideMenu, closeSideMenu })(Home);