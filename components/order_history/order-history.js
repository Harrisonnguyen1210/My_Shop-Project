import React, {Component} from 'react';
import {
    View, TouchableOpacity, Text, Image, StyleSheet, Dimensions, ScrollView,
} from 'react-native';
import backSpecial from '../../media/app_Icon/ic_back_white.png';
import GetOrderHistory from '../../api/getOrderHistory';
import GetToken from '../../api/getToken';
import colors from '../../res/colors';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
    wrapper: {flex: 1},
    header: {
        flex: 1,
        backgroundColor: colors.main,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    headerTitle: {color: colors.white, fontSize: 25, fontWeight: 'bold'},
    backIconStyle: {width: height / 10, height: height / 10},
    body: {flex: 9, backgroundColor: colors.greyBackground},
    orderRow: {
        height: width / 3,
        backgroundColor: colors.white,
        margin: 10,
        shadowOffset: {width: 2, height: 2},
        shadowColor: colors.shadow,
        shadowOpacity: 0.2,
        padding: 10,
        borderRadius: 2,
        justifyContent: 'space-around',
    },
    orderList: {
        color: colors.black,
        fontWeight: 'bold',
    },
    orderId: {color: colors.mainText, fontWeight: 'bold'},
    orderTime: {color: colors.greyText},
    orderStatus: {color: colors.mainText},
    orderTotal: {color: colors.greyText},
    viewList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dummyView: {width: height / 10, height: height / 10},
});

export default class OrderHistory extends Component {
    constructor(props) {
        super(props);
        this.state = {arrOrder: []};
    }

    //func for getting token then getting order history
    componentDidMount = () => {
        GetToken().then(token =>
            GetOrderHistory(token),
        ).then(arrOrder => {
                this.setState({arrOrder: arrOrder});
            },
        ).catch(err => console.log(err));
    };

    render() {
        const {
            wrapper, header, headerTitle, backIconStyle, body, orderRow,
            orderList, orderId, orderTime, orderStatus, orderTotal, viewList, dummyView,
        } = styles;
        return (
            <View style={wrapper}>
                <View style={header}>
                    <View style={dummyView}/>
                    <Text style={headerTitle}>Order History</Text>
                    <TouchableOpacity
                        onPress={() => this.props.navigation.goBack()}>
                        <Image source={backSpecial} style={backIconStyle}/>
                    </TouchableOpacity>
                </View>
                <View style={body}>
                    <ScrollView>
                        {this.state.arrOrder.map(orderItem => (
                            <View style={orderRow} key={orderItem.id}>
                                <View style={viewList}>
                                    <Text style={orderList}>Order id:</Text>
                                    <Text
                                        style={orderId}>ORD{orderItem.id}</Text>
                                </View>
                                <View style={viewList}>
                                    <Text style={orderList}>OrderTime:</Text>
                                    <Text
                                        style={orderTime}>{orderItem.date_order}</Text>
                                </View>
                                <View style={viewList}>
                                    <Text style={orderList}>Status:</Text>
                                    <Text
                                        style={orderStatus}>{orderItem.status ?
                                        'Complete' :
                                        'Pending'}</Text>
                                </View>
                                <View style={viewList}>
                                    <Text style={orderList}>Total:</Text>
                                    <Text
                                        style={orderTotal}>{orderItem.total}$</Text>
                                </View>
                            </View>
                        ))}
                    </ScrollView>
                </View>
            </View>
        );
    }
}
