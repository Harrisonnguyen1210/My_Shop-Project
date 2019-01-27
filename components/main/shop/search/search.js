import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import SearchView from './search_view';
import ProductDetail from '../product_detail/product_detail';

import {Platform, View} from 'react-native';

const CartNavigator = createStackNavigator({
    SearchView: SearchView,
    ProductDetail: ProductDetail,
}, {
    initialRouteName: 'SearchView',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const CartContainer = createAppContainer(CartNavigator);

export default class Search extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <CartContainer/>
            </View>
        );
    }
}