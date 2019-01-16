import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
    Dimensions,
    TouchableOpacity,
    ImageBackground
} from 'react-native';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const imageWidth = width - 30;
const imageHeight = imageWidth / 800 * 400;
const url = 'http://192.168.0.3/app/images/type';
const styles = StyleSheet.create({
    wrapper: {
        height: height / 3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 5,
    },
    swiperView: {flex: 4},
    title: {flex: 1, justifyContent: 'center'},
    text: {fontSize: 20},
    touchableImg: {flex: 1},
    image: {
        flex: 1,
        width: imageWidth,
        height: imageHeight,
        justifyContent: 'center',
        alignItems: 'center',
    },
    categoryText: {
        fontSize: 20,
        color: '#9A9A9A',
    },

});

export default class Collection extends Component {

    //func for navigating to list product page
    goToListProduct = (type) => {
        this.props.navigator.navigate('ListProduct', {type: type});
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.text}>LIST OF CATEGORY</Text>
                </View>
                <View style={styles.swiperView}>
                    <Swiper autoplay={true} autoplayTimeout={3.5}>
                        {this.props.types.map((type) => (
                            <TouchableOpacity key={type.id}
                                              style={styles.touchableImg}
                                              onPress={() => this.goToListProduct(type)}>
                                <ImageBackground style={styles.image} source={{uri: `${url}/${type.image}` }}>
                                    <Text style={styles.categoryText}>{type.name}</Text>
                                </ImageBackground>
                            </TouchableOpacity>
                        ))}
                    </Swiper>
                </View>
            </View>
        );
    }
}