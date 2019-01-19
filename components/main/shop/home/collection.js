import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';

const {height, width} = Dimensions.get('window');

const imageWidth = width - 30;
const imageHeight = imageWidth/800*533;

const styles = StyleSheet.create({
    wrapper: {
        height: height/3,
        backgroundColor: '#FFF',
        margin: 10,
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 5
    },
    banner: {flex: 4},
    title: {flex: 1, justifyContent: 'center'},
    text: {fontSize: 20},
    image: {flex: 1, width: imageWidth, height: imageHeight}
});

export default class Collection extends Component {

    goToListProduct = () => {
        this.props.navigator.navigate('ListProduct', {type: {id: 'COLLECTION', name: 'SPRING COLLECTION'} });
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.title}>
                    <Text style={styles.text}>SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={styles.banner} onPress={this.goToListProduct}>
                    <Image style={styles.image} source={require('../../../../media/pic/spring.jpg')}/>
                </TouchableOpacity>
            </View>
        );
    }
}