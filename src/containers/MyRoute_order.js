'use strict';
import React,{ Component } from 'react';
import { connect } from 'react-redux';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Swiper_order from '../components/Swiper_order';
import * as userApi from '../api/user-api';
import * as main from '../components/main-api';
class MyRoute_order extends Component {
    componentDidMount() {
        main.tj_all_swiper();
    }
    render(){
        return (
            <div>
                <Header title="我的订单"/>
                <Swiper_order/>
                <Footer/>
            </div>
        );
    }
}
const mapStateToProps = function(store) {
    return {
        users: store.userState.users
    };
};
export default connect(mapStateToProps)(MyRoute_order);