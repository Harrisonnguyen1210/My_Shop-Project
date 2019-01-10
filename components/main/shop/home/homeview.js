import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Collection from './collection';
import Category from './category';
import Top_Product from './top_product';
import getData from '../../../../api/initData';

export default class HomeView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            types: [],
            products: []
        };
    }

    componentDidMount = () => {
        getData().then(json => this.setState({types: json.type, products: json.product}));
    };

    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
                <Collection/>
                <Category navigator={this.props.navigation} types={this.state.types}/>
                <Top_Product navigator={this.props.navigation} products={this.state.products}/>
            </ScrollView>
        );
    }
}