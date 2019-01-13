import React, {Component} from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, TextInput, Alert,
} from 'react-native';
import backSpecial from '../../media/app_Icon/ic_back.png';
import GetToken from '../../api/getToken';
import ChangeInfoAPI from '../../api/changeInfo';
import Global from '../global';

const styles = StyleSheet.create({
    wrapper: {flex: 1, backgroundColor: '#fff'},
    header: {
        flex: 1,
        backgroundColor: '#2ABB9C',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        paddingHorizontal: 10,
    },// eslint-disable-line
    headerTitle: {fontFamily: 'Avenir', color: '#fff', fontSize: 20},
    backIconStyle: {width: 30, height: 30},
    body: {flex: 10, backgroundColor: '#F6F6F6', justifyContent: 'center'},
    textInput: {
        height: 45,
        marginHorizontal: 20,
        backgroundColor: '#FFFFFF',
        fontFamily: 'Avenir',
        paddingLeft: 20,
        borderRadius: 20,
        marginBottom: 20,
        borderColor: '#2ABB9C',
        borderWidth: 1,
    },
    signInTextStyle: {
        color: '#FFF',
        fontFamily: 'Avenir',
        fontWeight: '600',
        paddingHorizontal: 20,
    },
    signInContainer: {
        marginHorizontal: 20,
        backgroundColor: '#2ABB9C',
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

    changeInfo = () => {
        GetToken()
        .then(token => {
            ChangeInfoAPI(token, this.state.txtName, this.state.txtPhone, this.state.txtAddress)
            .then((user) => {
                console.log('dfsgdhfsd');
                console.log(user);
                this.alertSuccess();
                Global.signUserIn(user);
            });
        })
        .catch(err => console.log(err));
    };

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
            signInContainer, signInTextStyle, textInput,
        } = styles;
        const {txtName, txtAddress, txtPhone} = this.state;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View/>
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

