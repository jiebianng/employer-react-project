import * as types from '../actions/action-types';
import * as stateType from '../state/state-types';
const initialState = {
    orders:[],
    states: [],
    users: [],
    userProfile: {
        repos: []
    }
};

export default function(state = initialState, action) {
    switch(action.type) {
        case types.GET_USERS_SUCCESS:
            return Object.assign({}, state, { users: action.users });
        case types.GET_Login_SUCCESS:
            const loginState = action.states[0].state;
            if(loginState){
                stateType.saveUserState(1);
            }
            return Object.assign({}, state, { states: action.states });
        case types.GET_Order_SUCCESS:
            return Object.assign({}, state, { orders: action.orders });
    }
    return state;
}