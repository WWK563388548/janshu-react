import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [],
    articleList: [],
    recommandUrl: [],
    writerList: [],
});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        
        default:
            console.log("check home state", state);
            return state;
    };
};