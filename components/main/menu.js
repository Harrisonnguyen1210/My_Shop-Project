import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';
import Global from '../global';
import RemoveToken from '../../api/removeToken';
import colors from '../../res/colors';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.main,
        borderRightWidth: 3,
        borderColor: colors.white,
        alignItems: 'center',
    },
    avatar: {
        width: Dimensions.get('window').width * 0.3,
        height: Dimensions.get('window').width * 0.3,
        marginTop: 10,
    },
    buttonView: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '50%',
        height: '20%',
        borderRadius: 10,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    username: {
        color: colors.white,
        fontFamily: 'Avenir',
        fontSize: 15
    }
});

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null
        };
        Global.signUserIn = this.signUserIn;
        Global.goToAuth = this.goToAuth;
    }

    signUserIn = (user) => {
        this.setState({
            user: user
        })
    };

    signUserOut = () => {
        this.setState({
            user: null
        });
        RemoveToken().then(res => {console.log('User signed out')});
    };

    //Navigation func to Authentication page
    goToAuth = () => {
        this.props.navigator.navigate('Authentication',
            {transition: 'slideFromRight'});
    };

    //Navigation func to Change_Info page
    goToChangeIn = () => {
        this.props.navigator.navigate('Change_Info', {user: this.state.user});
    };

    //Navigation func to Order_History page
    goToOrderHis = () => {
        this.props.navigator.navigate('Order_History');
    };

    render() {

        const logoutJSX = (
            <View style={styles.buttonView}>
                <TouchableOpacity onPress={this.goToAuth} style={styles.button}>
                    <Text>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={styles.buttonView}>
                <Text style={styles.username}>{this.state.user ? this.state.user.name : ''}</Text>
                <TouchableOpacity onPress={this.goToOrderHis} style={styles.button}>
                    <Text>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeIn} style={styles.button}>
                    <Text>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signUserOut} style={styles.button}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;

        return (
            <View style={styles.wrapper}>
                <Image style={styles.avatar}
                       source={require('../../media/pic/avatar.png')}/>
                {mainJSX}
            </View>
        );
    }
}