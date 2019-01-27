import React, {Component} from 'react';
import {
    View, Text, StyleSheet, Image, Dimensions, ScrollView, TouchableOpacity,
} from 'react-native';
import Global from '../../../global';
import colors from '../../../../res/colors';

const back = require('../../../../media/app_Icon/ic_back_color.png');
const cart = require('../../../../media/app_Icon/ic_cart_color.png');
const {width} = Dimensions.get('window');
const swiperWidth = (width / 1.8) - 30;
const swiperHeight = (swiperWidth * 452) / 361;
const url = 'http://192.168.0.3/app/images/product';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.greyBackground,
    },
    cardStyle: {
        flex: 1,
        backgroundColor: colors.white,
        borderRadius: 5,
        marginHorizontal: 10,
        marginVertical: 10,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        flex: 1,
        paddingHorizontal: 15,
        paddingVertical: 10,
    },
    cartStyle: {
        width: width / 15,
        height: width / 15,
    },
    backStyle: {
        width: width / 10,
        height: width / 10,
    },
    imageContainer: {
        flex: 6,
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 10,
    },
    footer: {
        flex: 6,
    },
    titleContainer: {
        flex: 1,
        borderBottomWidth: 1,
        borderColor: colors.greyBackground,
        marginHorizontal: 15,
        alignItems: 'center',
    },
    textMain: {
        marginVertical: 10,
    },
    textBlack: {
        fontSize: 20,
        fontWeight: 'bold',
        color: colors.black,
    },
    textSmoke: {
        fontSize: 15,
        color: colors.greyText,
    },
    textHighlight: {
        fontSize: 20,
        color: colors.mainText,
    },
    descContainer: {
        flex: 3,
        margin: 10,
        paddingHorizontal: 10,
    },
    descStyle: {
        flex: 4,
        color: colors.greyText,
    },
    productImageStyle: {
        width: swiperWidth,
        height: swiperHeight,
        marginHorizontal: 5,
    },
    lowest: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingTop: 15,
    },
    txtColor: {
        color: colors.mainText,
        fontSize: 15,
        fontWeight: '400',
    },
    txtMaterial: {
        color: colors.mainText,
        fontSize: 15,
        fontWeight: '400',
    },
});

export default class ProductDetail extends Component {

    // func to add product to cart through global.js
    addProductToCart = () => {
        const product = this.props.navigation.getParam('product');
        Global.addProductToCart(product);
    };

    render() {

        const {
            wrapper, cardStyle, header,
            footer, backStyle,
            imageContainer, cartStyle, textBlack,
            textSmoke, textHighlight, textMain, titleContainer,
            descContainer, productImageStyle, descStyle, txtMaterial, txtColor, lowest,
        } = styles;
        const product = this.props.navigation.getParam('product');

        return (
            <View style={wrapper}>
                <View style={cardStyle}>
                    <View style={header}>
                        <TouchableOpacity
                            onPress={() => this.props.navigation.goBack()}>
                            <Image style={backStyle} source={back}/>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.addProductToCart}>
                            <Image style={cartStyle} source={cart}/>
                        </TouchableOpacity>
                    </View>
                    <View style={imageContainer}>
                        <ScrollView
                            style={{flexDirection: 'row', height: swiperHeight}}
                            horizontal>
                            <Image source={{uri: `${url}/${product.images[0]}`}}
                                   style={productImageStyle}/>
                            <Image source={{uri: `${url}/${product.images[1]}`}}
                                   style={productImageStyle}/>
                        </ScrollView>
                    </View>
                    <View style={footer}>
                        <View style={titleContainer}>
                            <Text style={textMain}>
                                <Text
                                    style={textBlack}>{product.name.toUpperCase()}</Text>
                                <Text style={textHighlight}> / </Text>
                                <Text style={textSmoke}>{product.price}$</Text>
                            </Text>
                        </View>
                        <View style={descContainer}>
                            <Text style={descStyle}>{product.description}</Text>
                            <View style={lowest}>
                                <Text
                                    style={txtMaterial}>Material {product.material}</Text>
                                <Text
                                    style={txtColor}>Color {product.color}</Text>
                                <View style={{
                                    height: 16,
                                    width: 16,
                                    backgroundColor: product.color.toLowerCase(),
                                    borderRadius: 8,
                                    borderWidth: 1,
                                    borderColor: colors.main,
                                }}/>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

