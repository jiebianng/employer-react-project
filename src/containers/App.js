'use strict';
import React,{ Component } from 'react';
import { Router, Route, browserHistory ,IndexRoute } from 'react-router';
// Supply
import child from '../containers/childRoute';
// Supply
import Supply from '../containers/SupplyRoute';
// Index
import Index from '../containers/IndexRoute';
// My
import My from '../containers/MyRoute';
import My_message from '../containers/MyRoute_message';//我的个人信息
import My_order from '../containers/MyRoute_order'; //我的订单
import My_address from '../containers/MyRoute_address'; //我的地址

class App extends Component {
    render(){
        return (
            <Router history={browserHistory}>
                <Route path='/Supply' component={Supply}/>
                <Route path='/' component={Index}/>
                <Route path='/My' component={child}>
                    <IndexRoute component={My}/>
                    <Route path='/My/message' component={My_message}/>
                    <Route path='/My/order' component={My_order}/>
                    <Route path='/My/address' component={My_address}/>
                </Route>
            </Router>
        );
    };
}
export default App;
