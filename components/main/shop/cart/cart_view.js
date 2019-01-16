import React, {Component} from 'react';
import {
    View, Text, TouchableOpacity, ScrollView,
    Dimensions, StyleSheet, Image, FlatList,
} from 'react-native';
import Global from '../../../global';

const {width} = Dimensions.get('window');
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;
const url = 'http://192.168.0.3/app/images/product';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: '#DFDFDF',
    },
    checkoutButton: {
        height: 50,
        margin: 10,
        marginTop: 0,
        backgroundColor: '#2ABB9C',
        borderRadius: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    main: {
        width, backgroundColor: '#DFDFDF',
    },
    checkoutTitle: {
        color: '#FFF',
        fontSize: 15,
        fontWeight: 'bold',
        fontFamily: 'Avenir',
    },
    product: {
        flexDirection: 'row',
        margin: 10,
        padding: 10,
        backgroundColor: '#FFFFFF',
        borderRadius: 2,
        shadowColor: '#3B5458',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
    },
    productImage: {
        width: imageWidth,
        height: imageHeight,
        flex: 1,
        resizeMode: 'center',
    },
    mainRight: {
        flex: 3,
        justifyContent: 'space-between',
    },
    productController: {
        flexDirection: 'row',
    },
    numberOfProduct: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    txtName: {
        paddingLeft: 20,
        color: '#A7A7A7',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir',
    },
    txtPrice: {
        paddingLeft: 20,
        color: '#C21C70',
        fontSize: 20,
        fontWeight: '400',
        fontFamily: 'Avenir',
    },
    txtShowDetail: {
        color: '#C21C70',
        fontSize: 10,
        fontWeight: '400',
        fontFamily: 'Avenir',
        textAlign: 'right',
    },
    showDetailContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
});

// func to capitalize every first letter of each words
const toTitleCase = (str) => {
    return str.replace(/\w\S*/g,
        txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
};

export default class CartView extends Component {

    goToProductDetail = (product) => {
        this.props.navigation.navigate('ProductDetail', {product: product});
    };

    increaseQuan = (productID) => {
        Global.increaseQuan(productID);
    };

    decreaseQuan = (productID) => {
        Global.decreaseQuan(productID);

    };

    removeProduct = (productID) => {
        Global.removeProduct(productID);
    };

    render() {
        const {
            main, checkoutButton, checkoutTitle, wrapper,
            product, mainRight, productController,
            txtName, txtPrice, productImage, numberOfProduct,
            txtShowDetail, showDetailContainer,
        } = styles;
        const cartArray = this.props.screenProps;
        const arrTotal = cartArray.map(item => {
            return item.product.price*item.quantity;
        });
        // calculate value for total money
        const total = arrTotal.length > 0 ? arrTotal.reduce((accumulator, currentValue) => accumulator + currentValue) : 0;
        return (
            <View style={wrapper}>
                <FlatList style={main}
                          keyExtractor={(item, index) => index.toString()}
                          data={cartArray}
                          renderItem={({item}) => (
                              <View style={product}>
                                  {console.log(item.product.id)}
                                  <Image source={{uri: `${url}/${item.product.images[0]}`}} style={productImage}/>
                                  <View style={[mainRight]}>
                                      <View style={{
                                          justifyContent: 'space-between',
                                          flexDirection: 'row',
                                      }}>
                                          <Text style={txtName}>{toTitleCase(item.product.name)}</Text>
                                          <TouchableOpacity onPress={() => {this.removeProduct(item.product.id)}}>
                                              <Text style={{
                                                  fontFamily: 'Avenir',
                                                  color: '#969696',
                                              }}>X</Text>
                                          </TouchableOpacity>
                                      </View>
                                      <View>
                                          <Text style={txtPrice}>{item.product.price}$</Text>
                                      </View>
                                      <View style={productController}>
                                          <View style={numberOfProduct}>
                                              <TouchableOpacity onPress={() => {this.increaseQuan(item.product.id)}}>
                                                  <Text>+</Text>
                                              </TouchableOpacity>
                                              <Text>{item.quantity}</Text>
                                              <TouchableOpacity onPress={() => {this.decreaseQuan(item.product.id)}}>
                                                  <Text>-</Text>
                                              </TouchableOpacity>
                                          </View>
                                          <TouchableOpacity onPress={() => this.goToProductDetail(item)}
                                              style={showDetailContainer}>
                                              <Text style={txtShowDetail}>SHOW DETAILS</Text>
                                          </TouchableOpacity>
                                      </View>
                                  </View>
                              </View>
                          )}
                >
                </FlatList>
                <TouchableOpacity style={checkoutButton}>
                    <Text style={checkoutTitle}>TOTAL {total}$ CHECKOUT NOW</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

