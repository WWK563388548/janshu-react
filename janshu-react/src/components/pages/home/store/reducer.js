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
    articleList: [
        {
            id: 1,
            title: "龟背蛇腰不可交，瞟眼看人不用刀。",
            desc: "俗语：龟背蛇腰不可交，瞟眼看人不用刀，啥意思？老祖宗的识人术 生活是一门深刻的艺术，它并不是单纯的衣食住行，还有广泛的社会交际。社交的难度并不是...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUc-cwuZ11MQBAGy3i7eYGn5Sgia1HiwooEg1gGPSLjzUjDAVfgQ",
            author: ""
        },
        {
            id: 2,
            title: "怎么在一个月内让英语听力有明显的提高？",
            desc: "只要你接下来按照下面所说的做，显著提升听力也就是一个月的时间！ 以下内容，本人吐血手码，如有雷同，天打雷劈。 先大概介绍一下自己：本人澳洲Mon...",
            image: "https://upload-images.jianshu.io/upload_images/6341457-674c34498babb4f0.jpg?imageMogr2/auto-orient/strip%7CimageView2/2/w/400/format/webp",
            author: ""
        },
        {
            id: 3,
            title: "俄罗斯发生大事！引起中国深思！",
            desc: "俄罗斯做过一个广泛的社会调查，目的是要评选俄罗斯最伟大的人物，历史当下都在选择之内，结果出炉，震惊了整个俄罗斯！ 在历经六十余载质疑、否定、污蔑...",
            image: "https://img2.utuku.china.com/600x0/news/20170426/57728e8d-3fe9-4408-8fd8-59a27b9caba7.jpg",
            author: ""
        },
        {
            id: 4,
            title: "成为Python大牛必须要掌握的高端语法——yield",
            desc: "1. 什么是yield 在介绍yield语法之前，首先要向大家说明Python中的迭代(iteration)、可迭代(iterable)、迭代器...",
            image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png",
            author: ""
        },
        {
            id: 5,
            title: "相貌出众左小青",
            desc: "曾是国家运动员，因长得美被导演看中，嫁给大20岁丈夫生活幸福 曾是国家运动员，因长得美被导演看中，嫁给大20岁丈夫生活幸福 左小青这个演员，相信...",
            image: "http://p1.pstatp.com/large/2ede000156f21f72ddac",
            author: ""
        },
        {
            id: 6,
            title: "程序员是否有义务做好代码的注释？你做好代码注释了吗？",
            desc: "关于编程，代码注释是一个很重要的部分，从某种程度上，代码注释也反应了一个程序员的专业素养，下面我们就来聊聊程序员和代码注释的那些事。 一些典型的...",
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4xPOPL_T7Ogn7sODLC6TlHFBAH_4hQ2XljWOfWvrPlD1Efdwr",
            author: ""
        },
    ],
    recommandUrl: [
        {
            id: 1,
            imageUrl: "http://cdn2.jianshu.io/assets/web/banner-s-3-7123fd94750759acf7eca05b871e9d17.png",
        },
        {
            id: 2,
            imageUrl: "http://cdn2.jianshu.io/assets/web/banner-s-4-b70da70d679593510ac93a172dfbaeaa.png",
        },
        {
            id: 3,
            imageUrl: "http://cdn2.jianshu.io/assets/web/banner-s-7-1a0222c91694a1f38e610be4bf9669be.png",
        },
        {
            id: 4,
            imageUrl: "http://cdn2.jianshu.io/assets/web/banner-s-5-4ba25cf5041931a0ed2062828b4064cb.png",
        },
        {
            id: 5,
            imageUrl: "http://cdn2.jianshu.io/assets/web/banner-s-6-c4d6335bfd688f2ca1115b42b04c28a7.png",
        },
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