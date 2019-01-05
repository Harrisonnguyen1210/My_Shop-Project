import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    Image,
    Dimensions,
} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'blue',
        borderRightWidth: 3,
        borderColor: 'white',
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
        backgroundColor: '#fff',
    },
});

export default class Menu extends Component {
    //Navigation func to Authentication page
    goToAuth = () => {
        this.props.navigator.navigate('Authentication',
            {transition: 'slideFromRight'});
    };
    //Navigation func to Change_Info page
    goToChangeIn = () => {
        this.props.navigator.navigate('Change_Info');
    };
    //Navigation func to Order_History page
    goToOrderHis = () => {
        this.props.navigator.navigate('Order_History');
    };

    constructor(props) {
        super(props);
        this.state = {
            isLoggedIn: false
        }
    }

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
                <TouchableOpacity onPress={this.goToOrderHis} style={styles.button}>
                    <Text>Order History</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeIn} style={styles.button}>
                    <Text>Change Info</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={this.goToChangeIn} style={styles.button}>
                    <Text>Sign Out</Text>
                </TouchableOpacity>
            </View>
        );

        const mainJSX = this.state.isLoggedIn ? loginJSX : logoutJSX;

        return (
            <View style={styles.wrapper}>
                <Image style={styles.avatar}
                       source={require('../../media/pic/avatar.png')}/>
                {mainJSX}
            </View>
        );
    }
}