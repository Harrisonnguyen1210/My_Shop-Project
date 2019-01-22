import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import colors from '../../../../res/colors';

const {height, width} = Dimensions.get('window');

const imageWidth = width - 30;
const imageHeight = imageWidth/800*533;

const styles = StyleSheet.create({
    wrapper: {
        height: height/3,
        backgroundColor: colors.white,
        margin: 10,
        shadowColor: colors.shadow,
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
        padding: 5
    },
    banner: {flex: 4},
    titleContainer: {flex: 1, justifyContent: 'center', paddingLeft: 5},
    title: {fontSize: 20, fontWeight: 'bold', color: colors.black},
    image: {flex: 1, width: imageWidth, height: imageHeight}
});

export default class Collection extends Component {

    goToListProduct = () => {
        this.props.navigator.navigate('ListProduct', {type: {id: 'COLLECTION', name: 'SPRING COLLECTION'} });
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>SPRING COLLECTION</Text>
                </View>
                <TouchableOpacity style={styles.banner} onPress={this.goToListProduct}>
                    <Image style={styles.image} source={require('../../../../media/pic/spring.jpg')}/>
                </TouchableOpacity>
            </View>
        );
    }
}