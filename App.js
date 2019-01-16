/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Animated, Easing, View, Platform} from 'react-native';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import Authentication from './components/authentication/authentication';
import Change_Info from './components/change_info/change_info';
import Main from './components/main/main';
import Order_History from './components/order_history/order-history';
import RefreshToken from './api/refreshToken';

const TransitionConfiguration = () => {
    return {
        transitionSpec: {
            duration: 750,
            easing: Easing.out(Easing.poly(4)),
            timing: Animated.timing,
            useNativeDriver: true,
        },
        screenInterpolator: (sceneProps) => {
            const { layout, position, scene } = sceneProps;
            const width = layout.initWidth;
            const { index, route } = scene;
            const params = route.params || {}; // <- That's new
            const transition = params.transition || 'default'; // <- That's new
            return {
                slideFromRight: SlideFromRight(index, position, width),
                default: CollapseExpand(index, position),
            }[transition];
        },
    }
};

let SlideFromRight = (index, position, width) => {
    const translateX = position.interpolate({
        inputRange: [index - 1, index, index + 1],
        outputRange: [width, 0, 0]
    });
    return {transform: [{translateX}]}
};

let CollapseExpand = (index, position) => {
    const inputRange = [index - 1, index, index + 1];
    const opacity = position.interpolate({
        inputRange,
        outputRange: [0, 1, 1],
    });

    const scaleY = position.interpolate({
        inputRange,
        outputRange: ([1, 1, 1]),
    });

    return {
        opacity,
        transform: [
            { scaleY }
        ]
    };
};

const AppNavigator = createStackNavigator({
    Main: Main,
    Authentication: Authentication,
    Change_Info: Change_Info,
    Order_History: Order_History,
},{
    initialRouteName: 'Main',
    headerMode: "none",
    mode: Platform.OS === "ios" ? "modal" : "card",
    transitionConfig: TransitionConfiguration,
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
    // func for refreshing login token after 30s
    componentDidMount = () => {
        setInterval(RefreshToken, 30000);
    };

    render() {
        return (
            <View style={{flex: 1}}>
                <AppContainer/>
            </View>
        );
    }
}
