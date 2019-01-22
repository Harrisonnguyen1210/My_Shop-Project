import React, {Component} from 'react';
import {
    View,
    Text,
    Image,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import ProductItem from '../list_product/product_item';

const {height, width} = Dimensions.get('window');
const productWidth = (width - 50) / 2;
const productHeight = productWidth / 560 * 840;
const url = 'http://192.168.0.3/app/images/product';
import colors from '../../../../res/colors';

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: colors.white,
        margin: 10,
        shadowColor: colors.shadow,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10,
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black
    },
    body: {
        justifyContent: 'space-around'
    },
    productContainer: {
        width: productWidth,
        backgroundColor: colors.greyBackground,
        marginBottom: 10,
        shadowColor: colors.shadow,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    productImage: {
        width: productWidth,
        height: productHeight,
    },
    productInfo: {
        padding: 10,
    },
    productName: {
        color: colors.mainText,
        fontSize: 15
    },
    productPrice: {
        color: colors.greyText,
        fontSize: 12
    },

});

export default class Top_Product extends Component {

    goToProductDetail = (product) => {
        this.props.navigator.navigate('ProductDetail', {product: product});
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>
                <FlatList
                    data={this.props.products}
                    keyExtractor={(item, index) => index.toString()}
                    numColumns={2}
                    columnWrapperStyle={styles.body}
                    renderItem={({item}) =>
                        (
                            <TouchableOpacity key={item.id}
                                              style={styles.productContainer}
                                              onPress={() => this.goToProductDetail(item)}>
                                <Image style={styles.productImage}
                                       source={{uri: `${url}/${item.images[0]}`}}/>
                                <View style={styles.productInfo}>
                                    <Text
                                        style={styles.productName}>{item.name.toUpperCase()}</Text>
                                    <Text
                                        style={styles.productPrice}>{item.price}$</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                />
            </View>
        );
    }
}
