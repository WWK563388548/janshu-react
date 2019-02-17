import * as actionTypes from './constants';

const defaultState = {
    focused: false,
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
    
    return state;
};