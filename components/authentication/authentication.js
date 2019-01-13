import React, {Component} from 'react';
import {View, TextInput, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import SignIn from './signin';
import SignUp from './signup';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'space-between',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '10%',
        backgroundColor: 'red',
        paddingVertical: 10,
        alignItems: 'center',
    },
    backIcon: {
        height: 40,
        width: 40,
    },
    title: {
        fontSize: 30,
    },
    logoImage: {
        height: 40,
        width: 40,
        backgroundColor: 'white',
        borderRadius: 20,
    },
    footer: {
        height: '10%',
        backgroundColor: 'red',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    footerButtons: {
        backgroundColor: 'white',
        minHeight: 30,
        width: '25%',
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    activeStyle: {
        color: 'blue'
    },
    inactiveStyle: {
        color: 'black'
    }
});

export default class Authentication extends Component {

    constructor(props){
        super(props);
        this.state = {
            isSignIn: true
        }
    }

    goToSignIn = () => {
        this.setState({
            isSignIn: true
        });
    };

    render() {

        const mainJSX = this.state.isSignIn ? <SignIn goBack={() => this.props.navigation.goBack()}/>: <SignUp goToSignIn={this.goToSignIn}/>;

        return (
            <View style={styles.wrapper}>
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backIcon} source={require(
                            '../../media/app_Icon/ic_back.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Wearing a dress</Text>
                    <Image style={styles.logoImage}
                           source={require('../../media/pic/logo.png')}/>
                </View>
                {mainJSX}
                <View style={styles.footer}>
                    <TouchableOpacity onPress={() => {this.setState({isSignIn: true})}} style={styles.footerButtons}>
                        <Text style={this.state.isSignIn ? styles.activeStyle: styles.inactiveStyle}>SIGN IN</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => {this.setState({isSignIn: false})}} style={styles.footerButtons}>
                        <Text style={this.state.isSignIn ? styles.inactiveStyle: styles.activeStyle}>SIGN UP</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}
