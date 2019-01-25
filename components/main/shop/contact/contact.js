import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import phoneIcon from '../../../../media/app_Icon/ic_phone.png';
import mailIcon from '../../../../media/app_Icon/ic_email.png';
import messageIcon from '../../../../media/app_Icon/ic_send.png';
import locationIcon from '../../../../media/app_Icon/ic_location.png';
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps';
import colors from '../../../../res/colors';

const styles = StyleSheet.create({
    wrapper: { flex: 1, backgroundColor: colors.greyBackground },
    mapContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
        backgroundColor: colors.white,
        margin: 10,
        borderRadius: 2,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    infoContainer: {
        padding: 10,
        flex: 1,
        backgroundColor: colors.white,
        margin: 10,
        marginTop: 0,
        borderRadius: 2,
        shadowColor: colors.shadow,
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2
    },
    rowInfoContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: colors.greyBackground
    },
    imageStyle: {
        width: 30,
        height: 30
    },
    infoText: {
        color: colors.mainText,
        fontWeight: '500'
    },
    map: {
        flex: 1,
        ...StyleSheet.absoluteFillObject,
    }
});

export default class Contact extends Component {
    render() {
        const {
            mapContainer, wrapper, infoContainer,
            rowInfoContainer, imageStyle, infoText, map
        } = styles;
        return (
            <View style={wrapper}>
                <View style={mapContainer}>
                    <MapView
                        provider={PROVIDER_GOOGLE}
                        style={map}
                        region={{
                            latitude: 60.1699,
                            longitude: 24.9384,
                            latitudeDelta: 0.015,
                            longitudeDelta: 0.0121,
                        }}
                    >
                        <Marker
                            coordinate={{latitude: 60.1699, longitude: 24.9384 }}
                            title='My Shop'
                            description='Welcome to my shop'
                        />
                    </MapView>
                </View>
                <View style={infoContainer}>
                    <View style={rowInfoContainer}>
                        <Image source={locationIcon} style={imageStyle} />
                        <Text style={infoText}>123 Helsinki Finland</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={phoneIcon} style={imageStyle} />
                        <Text style={infoText}>(+358) 12345678</Text>
                    </View>
                    <View style={rowInfoContainer}>
                        <Image source={mailIcon} style={imageStyle} />
                        <Text style={infoText}>shopking.com</Text>
                    </View>
                    <View style={[rowInfoContainer, { borderBottomWidth: 0 }]}>
                        <Image source={messageIcon} style={imageStyle} />
                        <Text style={infoText}>(+358) 12345678</Text>
                    </View>
                </View>
            </View>
        );
    }
}
