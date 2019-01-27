import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    Dimensions,
} from 'react-native';
import SignIn from './signin';
import SignUp from './signup';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import colors from '../../res/colors';

const {height, width} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {
        justifyContent: 'space-between',
        backgroundColor: colors.main,
    },
    header: {
        justifyContent: 'space-around',
        height: height / 5,
        paddingVertical: 10,
        marginBottom: height / 20,
    },
    backIcon: {
        height: width / 6,
        width: width / 6,
    },
    title: {
        fontSize: 40,
        color: colors.white,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    footer: {
        height: height / 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: height / 10,
    },
    longText: {
        color: colors.white,
    },
    shortText: {
        color: colors.white,
        fontWeight: 'bold',
        fontSize: 15,
    },
});

export default class Authentication extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isSignIn: true,
        };
    }

    // set isSignIn state true
    goToSignIn = () => {
        this.setState({
            isSignIn: true,
        });
    };

    render() {
        const mainJSX = this.state.isSignIn ?
            <SignIn goBack={() => this.props.navigation.goBack()}/> :
            <SignUp goToSignIn={this.goToSignIn}/>;
        const footer = this.state.isSignIn ?
            <View style={styles.footer}>
                <Text style={styles.longText}>Don't have an account? </Text>
                <TouchableOpacity onPress={() => {
                    this.setState({isSignIn: false});
                }}>
                    <Text style={styles.shortText}>Sign up</Text>
                </TouchableOpacity>
            </View> :
            <View style={styles.footer}>
                <Text style={styles.longText}>Already have an account? </Text>
                <TouchableOpacity onPress={() => {
                    this.setState({isSignIn: true});
                }}>
                    <Text style={styles.shortText}>Sign in</Text>
                </TouchableOpacity>
            </View>;

        return (
            <KeyboardAwareScrollView
                style={{backgroundColor: colors.main}}
                resetScrollToCoords={{x: 0, y: 0}}
                contentContainerStyle={styles.wrapper}
            >
                <View style={styles.header}>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image style={styles.backIcon} source={require(
                            '../../media/app_Icon/ic_back_white.png')}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>SHOPKING</Text>
                </View>
                {mainJSX}
                {footer}
            </KeyboardAwareScrollView>
        );
    }
}
