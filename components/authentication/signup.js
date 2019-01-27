import React, {Component} from 'react';
import {
    View,
    TextInput,
    Text,
    StyleSheet,
    TouchableOpacity,
    Alert, Dimensions,
} from 'react-native';
import Register from '../../api/register';
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
    btnSignUp: {
        width: '50%',
        backgroundColor: colors.white,
        height: 40,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    textSignUp: {
        color: colors.mainText,
        fontWeight: 'bold',
    },
});

export default class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            name: '',
            password: '',
            rePassword: '',
        };
    }

    // func to register user
    registerUser = () => {
        const {email, name, password} = this.state;
        Register(email, name, password).then((response) => {
            response === 'SUCCESSFUL' ?
                this.registerSuccessfully() :
                this.registerUnSuccessfully();
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
            {cancelable: false},
        );
    };

    // func to alert user registered unsuccessfully
    registerUnSuccessfully = () => {
        Alert.alert(
            'Notice',
            'Sign up unsuccessfully, please try again',
            [
                {text: 'OK', onPress: () => this.removeEmail()},
            ],
            {cancelable: false},
        );
    };

    // func to remove email input if register unsuccessfully
    removeEmail = () => {
        this.setState({
            email: '',
        });
    };

    render() {
        return (
            <View style={styles.body}>
                <Text style={styles.inputTitle}>Your name *</Text>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your name'}
                           value={this.state.name}
                           onChangeText={text => this.setState({name: text})}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}/>
                <Text style={styles.inputTitle}>Your email *</Text>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your email'}
                           value={this.state.email}
                           onChangeText={email => this.setState({email: email})}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}
                />
                <Text style={styles.inputTitle}>Your password *</Text>
                <TextInput style={styles.inputText}
                           placeholder={'Enter your password'}
                           value={this.state.password}
                           secureTextEntry={true}
                           onChangeText={password => this.setState(
                               {password: password})}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}/>
                <TextInput style={styles.inputText}
                           placeholder={'Re-Enter your password'}
                           value={this.state.rePassword}
                           secureTextEntry={true}
                           onChangeText={rePassword => this.setState(
                               {rePassword: rePassword})}
                           underlineColorAndroid={colors.white}
                           placeholderTextColor={colors.white}/>
                <TouchableOpacity style={styles.btnSignUp}
                                  onPress={this.registerUser}>
                    <Text style={styles.textSignUp}>SIGN UP</Text>
                </TouchableOpacity>
            </View>
        );
    }
}