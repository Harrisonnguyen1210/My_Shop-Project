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

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: colors.main,
        borderRightWidth: 3,
        borderColor: colors.white,
        alignItems: 'center',
    },
    logo: {
        width: width * 0.3,
        height: width * 0.3,
        marginTop: 20,
        borderRadius: width * 0.15,
    },
    loginView: {
        width: '100%',
        height: '40%',
        justifyContent: 'space-around',
        alignItems: 'center',
    },
    logoutView: {
        width: '100%',
        height: '40%',
        alignItems: 'center',
        marginTop: height / 10,
    },
    loginText: {
        color: colors.white,
        marginBottom: 10,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '90%',
        height: '20%',
        borderRadius: 5,
        paddingHorizontal: 10,
        backgroundColor: colors.white,
    },
    btnText: {
        color: colors.mainText,
        fontWeight: 'bold',
    },
    username: {
        color: colors.white,
        fontSize: 20,
    },
});

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
        };
        Global.signUserIn = this.signUserIn;
        Global.goToAuth = this.goToAuth;
    }

    // set user state
    signUserIn = (user) => {
        this.setState({
            user: user,
        });
    };

    // func for sugn out button
    signUserOut = () => {
        this.setState({
            user: null,
        });
        RemoveToken().then(() => {
            console.log('User signed out');
        });
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
            <View style={styles.logoutView}>
                <Text style={styles.loginText}>Please login to your
                    account</Text>
                <TouchableOpacity onPress={this.goToAuth} style={styles.button}>
                    <Text style={styles.btnText}>Sign In</Text>
                </TouchableOpacity>
            </View>
        );

        const loginJSX = (
            <View style={styles.loginView}>
                <Text style={styles.username}>{this.state.user ?
                    this.state.user.name :
                    ''}</Text>
                <TouchableOpacity onPress={this.goToOrderHis}
                                  style={styles.button}>
                    <Text style={styles.btnText}>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeIn}
                                  style={styles.button}>
                    <Text style={styles.btnText}>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.signUserOut}
                                  style={styles.button}>
                    <Text style={styles.btnText}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.user ? loginJSX : logoutJSX;

        return (
            <View style={styles.wrapper}>
                <Image style={styles.logo}
                       source={require('../../media/pic/logo.png')}/>
                {mainJSX}
            </View>
        );
    }
}