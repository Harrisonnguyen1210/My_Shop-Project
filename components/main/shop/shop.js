import React, {Component} from 'react';
import {View, Image, Text} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/home';
import Contact from './contact/contact';
import Cart from './cart/cart';
import Search from './search/search';
import Header from './header';
import Global from '../../global';
import SaveCart from '../../../api/saveCart';
import GetCart from '../../../api/getCart';
import colors from '../../../res/colors';
import Badge from '../../../node_modules/react-native-tab-navigator/Badge';

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
            cartArray: [],
        };
        Global.addProductToCart = this.addProductToCart;
        Global.increaseQuan = this.increaseQuan;
        Global.decreaseQuan = this.decreaseQuan;
        Global.removeProduct = this.removeProduct;
        Global.goToSearch = this.goToSearch;
    }

    // get cart data from asyncStorage
    componentDidMount = () => {
        GetCart().then((cartArray) => {
            this.setState({cartArray: cartArray});
        });
    };

    // when search inputText is focused, move to search Tab
    goToSearch = () => {
        this.setState({
            selectedTab: 'search',
        });
    };

    // func for adding product to cart then saving cart data to asyncStorage
    addProductToCart = (product) => {
        const isExist = this.state.cartArray.some(
            item => item.product.id === product.id);
        if (isExist) return;
        this.setState(
            {
                cartArray: this.state.cartArray.concat(
                    {product: product, quantity: 1}),
            },
            () => SaveCart(this.state.cartArray),
        );
    };

    // func for increasing quantity of product in cart
    increaseQuan = (productId) => {
        const newCart = this.state.cartArray.map(item => {
            if (item.product.id !== productId) return item;
            return {product: item.product, quantity: item.quantity + 1};
        });
        this.setState({cartArray: newCart},
            () => SaveCart(this.state.cartArray),
        );
    };

    // func for decreasing quantity of product in cart
    decreaseQuan = (productId) => {
        const newCart = this.state.cartArray.map(item => {
            if (item.product.id !== productId) return item;
            else {
                if (item.quantity <= 0) return {
                    product: item.product,
                    quantity: item.quantity,
                };
                return {product: item.product, quantity: item.quantity - 1};
            }
        });
        this.setState({cartArray: newCart},
            () => SaveCart(this.state.cartArray),
        );
    };

    // func for removing product in cart
    removeProduct = (productId) => {
        const newCart = this.state.cartArray.filter(
            item => item.product.id !== productId);
        this.setState({cartArray: newCart},
            () => SaveCart(this.state.cartArray),
        );
    };

    // func for opening menu drawer, getting open prop from main.js
    openMenu = () => {
        const {open} = this.props;
        open();
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <Header onOpen={this.openMenu}/>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        title="Home"
                        selectedTitleStyle={{color: colors.mainText}}
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_home.png')}/>}
                        renderSelectedIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_home_color.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        selectedTitleStyle={{color: colors.mainText}}
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_cart.png')}/>}
                        renderSelectedIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_cart_color.png')}/>}
                        // badgeText={this.state.cartArray.length}
                        renderBadge={() => <Badge
                            style={{backgroundColor: colors.main}}>{this.state.cartArray.length}</Badge>}
                        onPress={() => this.setState({selectedTab: 'cart'})}>
                        <Cart cartArray={this.state.cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        selectedTitleStyle={{color: colors.mainText}}
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_search.png')}/>}
                        renderSelectedIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_search_color.png')}/>}
                        onPress={() => this.setState({selectedTab: 'search'})}>
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        selectedTitleStyle={{color: colors.mainText}}
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_contact.png')}/>}
                        renderSelectedIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_contact_color.png')}/>}
                        onPress={() => this.setState({selectedTab: 'contact'})}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}