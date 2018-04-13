import React, {Component} from 'react';
import { connect } from 'react-redux';
import {Text, View} from 'react-native';

class Popular extends Component{
    render(){
        console.log(this.props);
        return(
            <View>
            </View>
        );
    }
}

const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, null)(Popular);