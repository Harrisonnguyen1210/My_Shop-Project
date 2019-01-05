import React, {Component} from 'react';
import {
    View,
    Text,
    Dimensions,
    TouchableOpacity,
    Image,
    TextInput,
    StyleSheet,
} from 'react-native';
import icMenu from '../../../media/app_Icon/ic_menu.png';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        height: height / 8,
        backgroundColor: 'blue',
        justifyContent: 'space-around'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: height / 20,
    },
    textInput: {
        height: height / 20,
        backgroundColor: '#FFF',
        padding: 5
    },
    title: {
        color: '#FFF',
        fontSize: 20
    },
    menuIcon: {

    }
});

export default class Header extends Component {
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>Wearing a dress</Text>
                </View>
                <TextInput
                    style={styles.textInput}
                    placeholder="What do you want to buy ?"
                />
            </View>
        );
    }
}