import { combineReducers } from 'redux';

// Reducers
import userReducer from './user-reducer';
import otherReducer from './other-reducer';

// Combine Reducers
var reducers = combineReducers({
    userState: userReducer,
    otherState: otherReducer
});

export default reducers;