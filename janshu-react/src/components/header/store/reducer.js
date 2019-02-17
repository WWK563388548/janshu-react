import * as actionTypes from './constants';

const defaultState = {
    focused: false,
    recommandList: [],
};

export default (state = defaultState, action) => {
    switch(action.type){
        case actionTypes.SEARCH_FIELD_FOCUS:
            return {
                focused: true,
            };
        case actionTypes.SEARCH_FIELD_BLUR:
            return {
                focused: false,
            };
        case actionTypes.GET_SEARCH_RECOMMAND_DATA:
            return {
                ...state,
                recommandList: action.data,
            }
        default:
            return state;
    }
};