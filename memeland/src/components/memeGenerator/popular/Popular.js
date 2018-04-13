import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Text, View, ListView, Image } from 'react-native';
import { memePopular, memeSelectedAction } from '../../../actions';
import { Item } from './Item';
import { HeaderStandard } from '../../common/';

class Popular extends Component {

    componentWillMount() {
        const ds = new ListView.DataSource({
            rowHasChanged: (r1, r2) => r1 !== r2
        });

        this.dataSource = ds.cloneWithRows(memePopular);
    }

    renderRow(ItemMenu) {
        return <Item item={ItemMenu} onPress={function (id, name, uri) { this.props.memeSelectedAction(id, name, uri) }.bind(this)} />;
    }

    render() {
        const { headerIndicator, mainContainer, indicatorImage } = styles;
        return (
            <View style={mainContainer}>
                <HeaderStandard showHamburger={false} />
                <View style={headerIndicator}>
                    <Image style={indicatorImage} source={require('../../../assets/stepsIndicator/step2.png')} />
                </View>
                <ListView
                    dataSource={this.dataSource}
                    renderRow={this.renderRow.bind(this)}
                />
            </View>
        );
    }
}

const styles = {
    mainContainer: {
        flex: 1
    },
    headerIndicator: {
        backgroundColor: '#f2f2',
        flex: .15
    },
    indicatorImage: {
        height: null,
        width: null,
        flex: 1,
    }
}


const mapStateToProps = ({ memeGenerator }) => {
    return { memeGenerator: memeGenerator };
};

export default connect(mapStateToProps, { memeSelectedAction })(Popular);