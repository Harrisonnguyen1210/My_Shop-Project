import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');
const productWidth = (width -50)/2;
const productHeight = productWidth/560*840;

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: '#ffffff',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    titleContainer: {
        height: 50,
        justifyContent: 'center',
        paddingLeft: 10
    },
    title: {
        fontSize: 20
    },
    body: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around'
    },
    productContainer: {
        width: productWidth,
        backgroundColor: 'red',
        marginBottom: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    productImage: {
        width: productWidth,
        height: productHeight
    },
    productInfo: {
        padding: 10
    },
    productName: {
        color: '#000000'
    },
    productPrice: {
        color: '#000000'
    }

});

export default class Top_Product extends Component {

    goToProductDetail = () => {
      this.props.navigator.navigate('ProductDetail');
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>TOP PRODUCT</Text>
                </View>
                <View style={styles.body}>
                    <TouchableOpacity style={styles.productContainer} onPress={this.goToProductDetail}>
                        <Image style={styles.productImage} source={require(
                            '../../../../media/pic/product1.jpg')}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>PRODUCT NAME</Text>
                            <Text style={styles.productPrice}>PRODUCT PRICE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={this.goToProductDetail}>
                        <Image style={styles.productImage} source={require(
                            '../../../../media/pic/product2.jpeg')}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>PRODUCT NAME</Text>
                            <Text style={styles.productPrice}>PRODUCT PRICE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={this.goToProductDetail}>
                        <Image style={styles.productImage} source={require(
                            '../../../../media/pic/product3.jpg')}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>PRODUCT NAME</Text>
                            <Text style={styles.productPrice}>PRODUCT PRICE</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.productContainer} onPress={this.goToProductDetail}>
                        <Image style={styles.productImage} source={require(
                            '../../../../media/pic/product4.jpg')}/>
                        <View style={styles.productInfo}>
                            <Text style={styles.productName}>PRODUCT NAME</Text>
                            <Text style={styles.productPrice}>PRODUCT PRICE</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}