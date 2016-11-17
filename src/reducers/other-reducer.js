import * as types from '../actions/action-types';
import _ from 'lodash';
const initialState = {
    swi_data: [],
    Supply_data:[]
};
const oldData = [];
export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_OTHERS_SWI:
            return Object.assign({}, state, { swi_data: action.swi_data });
        case types.GET_OTHERS_Supply:
            return Object.assign({}, state, { Supply_data: action.Supply_data });
        case types.GET_OTHERS_SupplyQuery:
            oldData.push(state.Supply_data.list);
            let newData = _.filter(oldData[0],action.query);
            action.Supply_data.list=newData;
            return Object.assign({}, state, { Supply_data: action.Supply_data });
    }
    return state;
}