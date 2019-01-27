import React, {Component} from 'react';
import {
    View,
    TouchableOpacity,
    Text,
    Image,
    StyleSheet,
    TextInput,
    Alert,
    Dimensions,
} from 'react-native';
import backSpecial from '../../media/app_Icon/ic_back_white.png';
import GetToken from '../../api/getToken';
import ChangeInfoAPI from '../../api/changeInfo';
import Global from '../global';
import colors from '../../res/colors';

const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {flex: 1, backgroundColor: colors.white},
    header: {
        flex: 1,
        backgroundColor: colors.main,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerTitle: {color: colors.white, fontSize: 25, fontWeight: 'bold'},
    backIconStyle: {width: height / 10, height: height / 10},
    dummyView: {width: height / 10, height: height / 10},
    body: {
        flex: 9,
        backgroundColor: colors.greyBackground,
        justifyContent: 'center',
    },
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: colors.white,
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: colors.main,
        borderWidth: 1,
    },
    signInTextStyle: {
        color: colors.white,
        fontWeight: '600',
        paddingHorizontal: 20,
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: colors.main,
        borderRadius: 20,
        height: 45,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
    },
    signInStyle: {
        flex: 3,
        marginTop: 50,
    },
});

export default class ChangeInfo extends Component {
    constructor(props) {
        super(props);
        const {name, address, phone} = this.props.navigation.getParam('user');
        this.state = {
            txtName: name,
            txtAddress: address,
            txtPhone: phone,
        };
    }

    // get token then change user info
    changeInfo = () => {
        GetToken().then(token => {
            ChangeInfoAPI(token, this.state.txtName, this.state.txtPhone,
                this.state.txtAddress).then((user) => {
                this.alertSuccess();
                Global.signUserIn(user);
            });
        }).catch(err => console.log(err));
    };

    // alert when successfully change user info
    alertSuccess = () => {
        Alert.alert(
            'Notice',
            'Change info successfully',
            [
                {text: 'OK', onPress: () => this.props.navigation.goBack()},
            ],
            {cancelable: false},
        );
    };

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body,
            signInContainer, signInTextStyle, textInput, dummyView,
        } = styles;
        const {txtName, txtAddress, txtPhone} = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View style={dummyView}/>
                    <Text style={headerTitle}>User Information</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image source={backSpecial} style={backIconStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <TextInput
                        style={textInput}
                        placeholder="Enter your name"
                        autoCapitalize="none"
                        value={txtName}
                        onChangeText={txtName => this.setState(
                            {...this.state, txtName})}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your address"
                        autoCapitalize="none"
                        value={txtAddress}
                        onChangeText={txtAddress => this.setState(
                            {...this.state, txtAddress})}
                    />
                    <TextInput
                        style={textInput}
                        placeholder="Enter your phone number"
                        autoCapitalize="none"
                        value={txtPhone}
                        onChangeText={txtPhone => this.setState(
                            {...this.state, txtPhone})}
                    />
                    <TouchableOpacity style={signInContainer}
                                      onPress={this.changeInfo}>
                        <Text style={signInTextStyle}>CHANGE YOUR
                            INFORMATION</Text>
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

