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
import colors from '../../../res/colors';

const {height} = Dimensions.get('window');

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
        height: height / 8,
        backgroundColor: colors.main,
        justifyContent: 'space-around',
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: height / 20,
        marginBottom: 10,
    },
    textInput: {
        borderRadius: 5,
        height: height / 20,
        backgroundColor: colors.white,
        padding: 5,
    },
    title: {
        color: colors.white,
        fontSize: 25,
        fontWeight: 'bold',
    },
    menuIcon: {
        width: height / 22,
        height: height / 22,
    },
});

export default class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            txtSearch: '',
        };
    }

    onSearch = () => {
        Search(this.state.txtSearch).then(arrayProduct => {
            console.log(arrayProduct);
            Global.setSearchArray(arrayProduct);
        }).catch(err => console.log(err));
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.row1}>
                    <TouchableOpacity onPress={this.props.onOpen}>
                        <Image source={icMenu} style={styles.menuIcon}/>
                    </TouchableOpacity>
                    <Text style={styles.title}>SHOPKING</Text>
                    <View/>
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