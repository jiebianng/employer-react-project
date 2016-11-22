import $ from '../plugs/jquery';
import * as apiType from '../api/api-types';
import store from '../stores/index';
import { getUsersSuccess,getLoginSuccess,getOrderListSuccess } from '../actions/user-actions';

/**
 * 我的个人中心
 */

export function getUsers() {
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getUsersSuccess(response['my']));
        return response;
    });
}

/**
 * 登录
 */

export function getLogin(data) {
    console.log(data);
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getLoginSuccess(response['my']));
        return response;
    });
}

/**
 * 订单列表
 */

export function getOrderList() {
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getOrderListSuccess(response['orderList']));
        return response;
    });
}