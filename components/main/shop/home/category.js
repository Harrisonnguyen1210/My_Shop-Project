import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Swiper from 'react-native-swiper';

const {height, width} = Dimensions.get('window');

const imageWidth = width - 30;
const imageHeight = imageWidth / 800 * 400;

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
    image: {flex: 1, width: imageWidth, height: imageHeight},
});

export default class Collection extends Component {

    goToListProduct = () => {
        this.props.navigator.navigate('ListProduct')
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.text}>LIST OF CATEGORY</Text>
                </View>
                <View style={styles.swiperView}>
                    <Swiper autoplay={true} autoplayTimeout	= {3.5}>
                        <TouchableOpacity style={styles.touchableImg} onPress={this.goToListProduct}>
                            <Image style={styles.image} source={require(
                                '../../../../media/pic/maxi.jpg')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableImg} onPress={this.goToListProduct}>
                            <Image style={styles.image} source={require(
                                '../../../../media/pic/party.jpg')}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.touchableImg} onPress={this.goToListProduct}>
                            <Image style={styles.image} source={require(
                                '../../../../media/pic/gucci.jpeg')}/>
                        </TouchableOpacity>



                    </Swiper>
                </View>
            </View>
        );
    }
}