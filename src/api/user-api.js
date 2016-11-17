import $ from '../plugs/jquery';
import * as apiType from '../api/api-types';
import store from '../stores/index';
import { getUsersSuccess } from '../actions/user-actions';

/**
 * 我的个人中心
 */

export function getUsers() {
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getUsersSuccess(response['my']));
        return response;
    });
}