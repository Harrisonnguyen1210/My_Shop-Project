import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
} from 'react-native';
import colors from '../../../../res/colors';

const url = 'http://192.168.0.3/app/images/product';
const styles = StyleSheet.create({
    itemContainer: {
        flexDirection: 'row',
        paddingVertical: 5,
        paddingHorizontal: 10,
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
        fontWeight: 'bold',
        fontSize: 15,
        color: colors.black,
    },
    itemPrice: {
        color: colors.mainText,
        fontSize: 10,
    },
    itemMaterial: {
        color: colors.greyText,
        fontSize: 10,
    },
    lastRowInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    colorText: {
        fontSize: 12,
        width: '55%',
    },
    showDetail: {
        fontSize: 12,
        color: colors.mainText,
    },
});

// func to capitalize every first letter of each words
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export default class ProductItem extends Component {

    //func to go to product detail
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
                    <Text style={styles.itemMaterial}>{product.material}</Text>
                    <View style={styles.lastRowInfo}>
                        <Text
                            style={styles.colorText}>Color {product.color}</Text>
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