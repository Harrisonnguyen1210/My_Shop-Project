import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity, Dimensions,
} from 'react-native';
import signIn from '../../api/signIn';
import Global from '../global';
import SaveToken from '../../api/saveToken';
import colors from '../../res/colors';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    body: {
        height: height / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        width: '60%',
        marginBottom: 10,
        color: colors.white,
    },
    inputTitle: {
        color: colors.white,
        fontSize: 10,
        width: '60%',
    },
    btnSignIn: {
        width: '50%',
        backgroundColor: colors.white,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSignIn: {
        color: colors.mainText,
        fontWeight: 'bold',
    },
});

export default class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
        };
    }

    // func for signing user in and change isLoggedIn state in menu.js
    signUserIn = () => {
        const {email, password} = this.state;
        signIn(email, password).then((response) => {
            Global.signUserIn(response.user);
            this.props.goBack();
            SaveToken(response.token).then(() => {
                console.log('Token is saved');
            });
            console.log(response);
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.inputTitle}>Your email *</Text>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your email'}
                           value={this.state.email}
                           onChangeText={email => this.setState(
                               {email: email})}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}
                />
                <Text style={styles.inputTitle}>Your password *</Text>
                <TextInput style={styles.inputText}
                           secureTextEntry={true}
                           value={this.state.password}
                           onChangeText={password => this.setState(
                               {password: password})}
                           placeholder={'Enter your password'}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}
                />
                <TouchableOpacity style={styles.btnSignIn}
                                  onPress={this.signUserIn}>
                    <Text style={styles.textSignIn}>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}