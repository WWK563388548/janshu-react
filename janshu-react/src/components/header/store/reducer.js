import * as actionTypes from './constants';
import {fromJS} from 'immutable';

const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    recommandList: [],
    page: 1,
    totalPage: 1,
});

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_FIELD_FOCUS:
            return state.set('focused', true);
        case actionTypes.SEARCH_FIELD_BLUR:
            return state.set('focused', false);
        case actionTypes.GET_SEARCH_RECOMMAND_DATA:
            return state.merge({
                recommandList: action.data,
                totalPage: action.totalPage,
            });
        case actionTypes.MOUSE_ENTER:
            return state.set('mouseIn', true);
        case actionTypes.MOUSE_LEAVE:
            return state.set('mouseIn', false);
        case actionTypes.CHANGE_PAGE_LIST:
            return state.set('page', action.page);
        default:
            return state;
    }
};