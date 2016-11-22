import * as types from '../actions/action-types';

export function getUsersSuccess(users) {
    return {
        type: types.GET_USERS_SUCCESS,
        users
    };
}

export function getLoginSuccess(states) {
    return {
        type: types.GET_Login_SUCCESS,
        states
    };
}

export function getOrderListSuccess(orders) {
    return {
        type: types.GET_Order_SUCCESS,
        orders
    };
}