import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert
} from 'react-native';
import Register from '../../api/register';

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

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            rePassword: ''
        };
    }

    // func to register user
    registerUser = () => {
        const {email, name, password} = this.state;
        Register(email, name, password).then((response) => {
            response === 'SUCCESSFUL' ? this.registerSuccessfully() : this.registerUnSuccessfully();
        });
    };

    // func to alert user registered successfully
    registerSuccessfully = () => {
        Alert.alert(
            'Notice',
            'Sign up successfully',
            [
                {text: 'OK', onPress: () => this.props.goToSignIn()},
            ],
            { cancelable: false }
        )
    };

    // func to alert user registered unsuccessfully
    registerUnSuccessfully = () => {
        Alert.alert(
            'Notice',
            'Sign up unsuccessfully, please try again',
            [
                {text: 'OK', onPress: () => this.removeEmail()},
            ],
            { cancelable: false }
        )
    };

    // func to remove email input if register unsuccessfully
    removeEmail = () => {
        this.setState({
            email: ''
        });
    };

    render() {
        return (
            <View style={styles.body}>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your name'}
                           value={this.state.name}
                           onChangeText={text => this.setState({name: text})}/>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your email'}
                           value={this.state.email}
                           onChangeText={email => this.setState({email: email})}/>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your password'}
                           value={this.state.password}
                           secureTextEntry={true}
                           onChangeText={password => this.setState({password: password})}/>
                <TextInput style={styles.inputText}
                           placeholder={'Re-Enter your password'}
                           value={this.state.rePassword}
                           secureTextEntry={true}
                           onChangeText={rePassword => this.setState({rePassword: rePassword})}/>
                <TouchableOpacity onPress={this.registerUser}>
                    <Text>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}