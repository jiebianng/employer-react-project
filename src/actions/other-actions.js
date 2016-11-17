import * as types from '../actions/action-types';

export function getOtherSwiper(swi_data) {
    return {
        type: types.GET_OTHERS_SWI,
        swi_data
    };
}

export function getOthergetSupply(Supply_data) {
    return {
        type: types.GET_OTHERS_Supply,
        Supply_data
    };
}

export function getOtherSupplyQuery(Supply_data,query) {
    return {
        type: types.GET_OTHERS_SupplyQuery,
        Supply_data,
        query
    };
}