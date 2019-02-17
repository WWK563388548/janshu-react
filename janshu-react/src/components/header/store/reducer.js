import * as actionTypes from './constants';

const defaultState = {
    focused: false,
    recommandList: [],
};

export default (state = defaultState, action) => {
    if(action.type === actionTypes.SEARCH_FIELD_FOCUS){
        return {
            focused: true,
        }
    }

    if(action.type === actionTypes.SEARCH_FIELD_BLUR){
        return {
            focused: false,
        }
    }

    if(action.type === actionTypes.GET_SEARCH_RECOMMAND_DATA){
        return Object.assign(state, {recommandList: action.data});
    }
    
    return state;
};