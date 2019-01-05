import React, {Component} from 'react';
import {View, Image} from 'react-native';
import TabNavigator from 'react-native-tab-navigator';
import Home from './home/home';
import Contact from './contact/contact';
import Cart from './cart/cart';
import Search from './search/search';
import Header from './header'

export default class Shop extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: 'home',
        };
    }

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
                        renderIcon={() => <Image source={require('../../../media/app_Icon/ic_home.png')} />}
                        // renderSelectedIcon={() => <Image source={...} />}
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        <Home/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'cart'}
                        title="Cart"
                        renderIcon={() => <Image source={require('../../../media/app_Icon/ic_cart.png')} />}
                        // badgeText="1"
                        onPress={() => this.setState({selectedTab: 'cart'})}>
                        <Cart/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'search'}
                        title="Search"
                        renderIcon={() => <Image source={require('../../../media/app_Icon/ic_search.png')} />}
                        onPress={() => this.setState({selectedTab: 'search'})}>
                        <Search/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'contact'}
                        title="Contact"
                        renderIcon={() => <Image source={require('../../../media/app_Icon/ic_contact.png')} />}
                        onPress={() => this.setState({selectedTab: 'contact'})}>
                        <Contact/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        );
    }
}