import {fromJS} from 'immutable';
import {GET_HOME_DATA} from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommandUrl: [],
    writerList: [],
});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        case GET_HOME_DATA:
            console.log("set_home_data", action.data);
            return state.merge({
                topicList: fromJS(action.data.data.topicList),
                articleList: fromJS(action.data.data.articleList),
                recommandUrl: fromJS(action.data.data.recommandUrl),
                writerList: fromJS(action.data.data.writerList),
            });
        default:
            console.log("check home state", state);
            return state;
    };
};