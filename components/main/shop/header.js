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
import Global from '../../global';
import Search from '../../../api/searchProduct';

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
    constructor(props){
        super(props);
        this.state = {
            txtSearch: ''
        }
    }

    onSearch = () => {
        Search(this.state.txtSearch).then(arrayProduct => {
            console.log(arrayProduct);
            Global.setSearchArray(arrayProduct);
        }).catch(err => console.log(err))
    };

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
                    value={this.state.txtSearch}
                    onChangeText={text => this.setState({txtSearch: text})}
                    onFocus={Global.goToSearch}
                    onSubmitEditing={this.onSearch}
                />
            </View>
        );
    }
}