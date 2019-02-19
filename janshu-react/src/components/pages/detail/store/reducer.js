import {fromJS} from 'immutable';
import {GET_DETAIL_DATA} from './constants';

const defaultState = fromJS({
    title: '',
    content: '',

});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        case GET_DETAIL_DATA:
            return state.merge({
                title: fromJS(action.data.data.title),
                content: fromJS(action.data.data.content),
            });
       
        default:
            // console.log("check home state", state);
            return state;
    };
};