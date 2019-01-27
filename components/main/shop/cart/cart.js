import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import CartView from './cart_view';
import ProductDetail from '../product_detail/product_detail';

import {Platform, View} from 'react-native';

const CartNavigator = createStackNavigator({
    CartView: CartView,
    ProductDetail: ProductDetail,
}, {
    initialRouteName: 'CartView',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const CartContainer = createAppContainer(CartNavigator);

export default class Cart extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CartContainer screenProps={this.props.cartArray}/>
            </View>
        );
    }
}