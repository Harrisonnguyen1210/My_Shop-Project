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
const round = width * 0.01;
const url = 'http://192.168.0.3/app/images/product';
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        borderBottomWidth: 2,
        borderBottomColor: '#bfbfbf',
    },
    imgItem: {
        width: '30%',
        aspectRatio: 1,
    },
    itemInfo: {
        width: '70%',
        paddingLeft: 10,
        paddingRight: 0,
        justifyContent: 'space-between',
    },
    itemName: {
        fontSize: 25,
        color: '#bfbfbf',
    },
    itemPrice: {
        color: 'red',
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    showDetail: {
        color: 'red',
    },
    round: {
        height: 16,
        width: 16,
        borderRadius: 8,
        backgroundColor: 'cyan',
    },
});

// func to capitalize every first letter of each words
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export default class ProductItem extends Component {

    goToProductDetail = (product) => {
        this.props.navigator.navigate('ProductDetail', {product: product});
    };

    render() {

        const product = this.props.product;

        return (
            <View style={styles.itemContainer}>
                <Image style={styles.imgItem}
                       source={{uri: `${url}/${product.images[0]}`}}/>
                <View style={styles.itemInfo}>
                    <Text style={styles.itemName}>{toTitleCase(
                        product.name)}</Text>
                    <Text style={styles.itemPrice}>{product.price}$</Text>
                    <Text>{product.material}</Text>
                    <View style={styles.lastRowInfo}>
                        <Text>Color {product.color}</Text>
                        <View style={{
                            height: 16,
                            width: 16,
                            borderRadius: 8,
                            backgroundColor: `${product.color.toLowerCase()}`,
                        }}/>
                        <TouchableOpacity
                            onPress={() => this.goToProductDetail(product)}>
                            <Text style={styles.showDetail}>SHOW DETAIL</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        );
    }
}