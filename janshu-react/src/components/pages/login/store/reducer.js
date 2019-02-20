import {fromJS} from 'immutable';
import {HANDLE_LOGIN, HANDLE_LOGOUT} from './constants';
// import {GET_HOME_DATA, GET_MORE_ARTICLE_DATA, TOGGLE_SCROLL_SHOW} from './constants';

const defaultState = fromJS({
    login: false,
});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        case HANDLE_LOGIN:
            return state.set('login', action.data.data);
        case HANDLE_LOGOUT:
            return state.set('login', action.value);
        default:
            console.log("check home state", state);
            return state;
    };
};