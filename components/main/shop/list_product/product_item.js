import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

const {height, width} = Dimensions.get('window');
const round = width*0.01;

const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#bfbfbf'
    },
    imgItem: {
        width: '30%',
        aspectRatio: 1,
    },
    itemInfo: {
        width: '70%',
        paddingLeft: 10,
        paddingRight: 0,
        justifyContent: 'space-between'
    },
    itemName: {
        fontSize: 25,
        color: '#bfbfbf'
    },
    itemPrice: {
        color: 'red'
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    showDetail: {
        color: 'red'
    },
    round: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'cyan'
    }
});

export default class ProductItem extends Component {

    goToProductDetail = () => {
        this.props.navigator.navigate('ProductDetail');
    };

    render() {
        return (
            <View style={styles.itemContainer}>
                <Image style={styles.imgItem} source={require('../../../../media/pic/item1.jpg')}/>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>Lace Sleeve Si</Text>
                    <Text style={styles.itemPrice}>117$</Text>
                    <Text>Material silk</Text>
                    <View style={styles.lastRowInfo}>
                        <Text>Color RoyalBlue</Text>
                        <View style={styles.round}/>
                        <TouchableOpacity onPress={this.goToProductDetail}>
                            <Text style={styles.showDetail}>SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}