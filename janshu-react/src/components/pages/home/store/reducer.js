import {fromJS} from 'immutable';
import {GET_HOME_DATA, GET_MORE_ARTICLE_DATA, TOGGLE_SCROLL_SHOW} from './constants';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommandUrl: [],
    writerList: [],
    articlePage: 1,
    showScroll: false,
});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        case GET_HOME_DATA:
            // console.log("set_home_data", action.data);
            return state.merge({
                topicList: fromJS(action.data.data.topicList),
                articleList: fromJS(action.data.data.articleList),
                recommandUrl: fromJS(action.data.data.recommandUrl),
                writerList: fromJS(action.data.data.writerList),
            });
        case GET_MORE_ARTICLE_DATA:
            // console.log("set_home_data", action.data);
            return state.set('articleList', state.get('articleList').concat(fromJS(action.data.data.moreList)));
        case TOGGLE_SCROLL_SHOW:
            // console.log("set_home_data", action.data);
            return state.set('showScroll', action.show);
        default:
            console.log("check home state", state);
            return state;
    };
};