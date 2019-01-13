import React, {Component} from 'react';
import Drawer from 'react-native-drawer'
import Menu from './menu';
import Shop from './shop/shop';
import CheckLogin from '../../api/checkLogin';
import GetToken from '../../api/getToken';
import Global from '../global';

export default class Main extends Component{

    componentDidMount = () => {
        GetToken().then(token => {
            CheckLogin(token).then((res) => {
                Global.signUserIn(res.user);
            })
            .catch(err => console.log(err))
        }).catch(err => console.log(err));
    };

    closeControlPanel = () => {
        this.drawer.close()
    };

    // func for opening menu drawer
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