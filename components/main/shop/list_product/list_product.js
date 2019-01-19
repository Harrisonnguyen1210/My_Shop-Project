import React, {Component} from 'react';
import ProductItem from './product_item';
import {
    RefreshControl,
    Image,
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    FlatList,
    Dimensions,
} from 'react-native';
import GetListProduct from '../../../../api/getListProduct';

const {height, width} = Dimensions.get('window');
const heightImg = height * 0.08 - 10;

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'white',
        padding: 10,
    },
    container: {
        shadowColor: '#2e272b',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.2,
        elevation: 5,
    },
    header: {
        height: height * 0.08,
        backgroundColor: 'green',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 5,
    },
    backButtonView: {},
    backButtonImg: {
        height: heightImg,
        width: heightImg,
    },
    headerText: {
        justifyContent: 'center',
    },
    bodyText: {
        padding: 50,
    },
    view: {
        height: heightImg,
        width: heightImg,
    },
});

export default class ListProduct extends Component {

    constructor(props) {
        super(props);
        this.state = {
            FlatListItems: [],
            refreshing: false,
            page: 1
        };
    }

    componentDidMount = () => {
        const idType = this.props.navigation.getParam('type').id;
        console.log('My id is' + idType);
        GetListProduct( idType, this.state.page).then(arrProduct => {
            this.setState({FlatListItems: arrProduct});
            console.log(this.state.FlatListItems);
        }).catch(err => console.log(err));
    };

    _onRefresh = () => {
        this.setState({
            refreshing: true,
            page: this.state.page+1
        }, () => {
            const idType = this.props.navigation.getParam('type').id;
            const page = this.state.page;

            GetListProduct( idType, page).then(arrProduct => {
                console.log('###############');
                this.setState({
                    FlatListItems: arrProduct,
                    refreshing: false
                });
            }).catch(err => console.log(err));
        });
    };

    render() {

        const Sticky_header_View = (
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButtonView}
                                  onPress={() => this.props.navigation.goBack()}>
                    <Image style={styles.backButtonImg} source={require(
                        '../../../../media/app_Icon/ic_back.png/')}/>
                </TouchableOpacity>
                <Text style={styles.headerText}>{this.props.navigation.getParam('type').name}</Text>
                <View style={styles.view}/>
            </View>
        );

        return (
            <View style={styles.wrapper}>
                <FlatList style={styles.container}
                          data={this.state.FlatListItems}
                          ListHeaderComponent={Sticky_header_View}
                          stickyHeaderIndices={[0]}
                          keyExtractor={(item, index) => index.toString()}
                          renderItem={({item}) => <ProductItem navigator={this.props.navigation} product={item}/>}
                          refreshControl={
                              <RefreshControl
                                  refreshing={this.state.refreshing}
                                  onRefresh={this._onRefresh}
                              />
                          }
                >
                </FlatList>
            </View>
        );
    }
}