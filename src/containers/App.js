'use strict';
import React,{ Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router';
// child
import child from '../containers/childRoute';
// Supply
import Supply from '../containers/SupplyRoute';
import Supply_grad from '../containers/SupplyRoute_grab';//抢单

// Index
import Index from '../containers/IndexRoute';
// My
import My from '../containers/MyRoute';
import My_message from '../containers/MyRoute_message';//我的个人选择编辑界面
import My_message_info from '../containers/MyRoute_message_info';//我的个人信息展示界面
import My_order from '../containers/MyRoute_order'; //我的订单
import My_address from '../containers/MyRoute_address'; //我的地址
import My_address_edit from '../containers/MyRoute_address_edit'; //我的地址编辑
import My_password from '../containers/MyRoute_password'; //我的密码修改
import My_login from '../containers/MyRoute_login'; //登录
import My_register from '../containers/MyRoute_register'; //注册
import My_assess from '../containers/MyRoute_assess'; //服务评价

class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/Supply' component={child}>
                    <IndexRoute component={Supply}/>
                    <Route path='/Supply/grad' component={Supply_grad}/>
                </Route>
                <Route path='/' component={Index}/>
                <Route path='/My' component={child}>
                    <IndexRoute component={My}/>
                    <Route path='/My/message' component={My_message}/>
                    <Route path='/My/message_info' component={My_message_info}/>
                    <Route path='/My/order' component={My_order}/>
                    <Route path='/My/address' component={My_address}/>
                    <Route path='/My/address_edit' component={My_address_edit}/>
                    <Route path='/My/password' component={My_password}/>
                    <Route path='/My/login' component={My_login}/>
                    <Route path='/My/register' component={My_register}/>
                    <Route path='/My/assess' component={My_assess}/>
                </Route>
            </Router>
        );
    };
}
export default App;
