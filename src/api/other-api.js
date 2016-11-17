import $ from '../plugs/jquery';
import * as apiType from '../api/api-types';
import store from '../stores/index';
import { getOtherSwiper,getOthergetSupply,getOtherSupplyQuery } from '../actions/other-actions';

/**
 * 首页 轮播
 */

export function getSwipers(url) {
    return $.get(apiType.RootPath+url,response =>{
        store.dispatch(getOtherSwiper(response['swiper']));
        return response;
    });
}

/**
 * 需求 查询所有数据
 */

export function getSupply() {
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getOthergetSupply(response['supply']));
        return response;
    });
}

/**
 * 需求 条件查询
 */

export function getSupplyQuery(query) {
    return $.get(apiType.RootPath+'data/data.json',response =>{
        store.dispatch(getOtherSupplyQuery(response['supply'],query));
        return response;
    });
}