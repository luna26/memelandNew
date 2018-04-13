import React, { Component } from 'react';
import { connect } from 'react-redux';
import { openSideMenu } from '../../actions';
import { View, Text, Image, Dimensions } from 'react-native';
import { HeaderStandard } from '../common/';
import SideMenu from '../sideMenu/SideMenu';

class Home extends Component {
    render() {
        console.log(this.props);
        const { homeContainer } = styles;
        return (
            <View style={homeContainer}>
                <SideMenu />
                <HeaderStandard showHamburger={true} onPressHamburger={this.props.openSideMenu} />
                <View>
                    <Image style={{ width: Dimensions.get('window').width }} source={require('../../assets/memes/meme1.jpg')} />
                </View>
            </View>
        );
    }
}

const styles = {
    homeContainer: {
        flex: 1
    }
}

const mapStateToProps = ({ home, sideMenu }) => {
    return {
        home: home,
        sideMenu : sideMenu
    };
};

export default connect(mapStateToProps, { openSideMenu })(Home);