import React, {Component} from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import HomeView from './homeview';
import ProductDetail from '../product_detail/product_detail';
import ListProduct from '../list_product/list_product';

import {Platform, View} from 'react-native';

const HomeNavigator = createStackNavigator({
    HomeView: HomeView,
    ProductDetail: ProductDetail,
    ListProduct: ListProduct,
}, {
    initialRouteName: 'HomeView',
    headerMode: 'none',
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
});

const HomeContainer = createAppContainer(HomeNavigator);

export default class Home extends Component {
    render() {
        return (
            <View style={{flex: 1}}>
                <HomeContainer/>
            </View>
        );
    }
}