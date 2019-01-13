import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import signIn from '../../api/signIn';
import Global from '../global';
import SaveToken from '../../api/saveToken';

const styles = StyleSheet.create({
    body: {
        height: '80%',
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    inputText: {
        width: '60%',
        minHeight: 50,
        backgroundColor: 'white',
        borderRadius: 20,
        marginBottom: 10,
        paddingLeft: 10,
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
            SaveToken(response.token).then(res => {
                console.log('Token is saved')
            });
            console.log(response);
        }).catch(err => console.log(err))
    };

    render() {
        return (
            <View style={styles.body}>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your email'}
                           value={this.state.email}
                           onChangeText={email => this.setState(
                               {email: email})}/>
                <TextInput style={styles.inputText}
                           secureTextEntry={true}
                           value={this.state.password}
                           onChangeText={password => this.setState(
                               {password: password})}
                           placeholder={'Enter your password'}/>
                <TouchableOpacity onPress={this.signUserIn}>
                    <Text>SIGN IN</Text>
                </TouchableOpacity>
            </View>
        );
    }
}