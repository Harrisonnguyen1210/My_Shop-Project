import React, {Component} from 'react';
import {View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/home';
import Contact from './contact/contact';
import Cart from './cart/cart';
import Search from './search/search';
import Header from './header';
import Global from '../../global';
import SaveCart from '../../../api/saveCart';
import GetCart from '../../../api/getCart';

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
    }

    // get cart data from asyncStorage
    componentDidMount = () => {
        GetCart().then((cartArray) => {
            this.setState({cartArray: cartArray});
        });
    };

    // func for adding product to cart then saving cart data to asyncStorage
    addProductToCart = (product) => {
        this.setState(
            { cartArray: this.state.cartArray.concat({ product: product, quantity: 1 }) },
            () => SaveCart(this.state.cartArray)
        );
    };

    // func for increasing quantity of product in cart
    increaseQuan = (productId) => {
        const newCart = this.state.cartArray.map(item => {
            if (item.product.id !== productId) return item;
            return { product: item.product, quantity: item.quantity + 1 };
        });
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray)
        );
    };

    // func for decreasing quantity of product in cart
    decreaseQuan = (productId) => {
        const newCart = this.state.cartArray.map(item => {
            if (item.product.id !== productId) return item;
            return { product: item.product, quantity: item.quantity - 1 };
        });
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray)
        );
    };

    // func for removing product in cart
    removeProduct = (productId) => {
        const newCart = this.state.cartArray.filter(item => item.product.id !== productId);
        this.setState({ cartArray: newCart },
            () => SaveCart(this.state.cartArray)
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
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_home.png')}/>}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_cart.png')}/>}
                        badgeText={this.state.cartArray.length}
                        onPress={() => this.setState({selectedTab: 'cart'})}>
                        <Cart cartArray={this.state.cartArray}/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_search.png')}/>}
                        onPress={() => this.setState({selectedTab: 'search'})}>
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={require(
                            '../../../media/app_Icon/ic_contact.png')}/>}
                        onPress={() => this.setState({selectedTab: 'contact'})}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}