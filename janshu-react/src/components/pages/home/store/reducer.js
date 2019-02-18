import {fromJS} from 'immutable';

const defaultState = fromJS({
    topicList: [
        {
            id: 1,
            title: 'Python教程/练习题',
            image: "//upload.jianshu.io/collections/images/345460/u_1240372403_2153081336_fm_58.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        },
        {
            id: 2,
            title: '悬疑推理',
            image: "//upload.jianshu.io/collections/images/333523/mymInbq_%E5%89%AF%E6%9C%AC.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp",
        }
    ],
});

export default (state = defaultState, action) => {
    //return state;
    switch(action.type){
        
        default:
            console.log("check home state", state);
            return state;
    };
};