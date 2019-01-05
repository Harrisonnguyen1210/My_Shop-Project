import React, {Component} from 'react';
import Drawer from 'react-native-drawer'

import Menu from './menu';
import Shop from './shop/shop';

export default class Main extends Component{

    closeControlPanel = () => {
        this.drawer.close()
    };
    openControlPanel = () => {
        this.drawer.open()
    };
    render() {
        return (
            <Drawer
                ref={(ref) => {this.drawer = ref}}
                content={<Menu navigator={this.props.navigation}/>}
                tapToClose={true}
                openDrawerOffset={0.4}
            >
                <Shop open={this.openControlPanel}/>
            </Drawer>
        );
    }
}