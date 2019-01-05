import React, {Component} from 'react';
import {ScrollView} from 'react-native';
import Collection from './collection';
import Category from './category';
import Top_Product from './top_product';

export default class Home extends Component {
    render() {
        return (
            <ScrollView style={{flex: 1, backgroundColor: '#f1f1f1'}}>
                <Collection/>
                <Category navigator={this.props.navigation}/>
                <Top_Product navigator={this.props.navigation}/>
            </ScrollView>
        );
    }
}