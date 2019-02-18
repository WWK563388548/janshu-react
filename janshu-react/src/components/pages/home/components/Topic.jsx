import React, { Component } from 'react';
import {
    TopicWrapper,
    TopicItem,
    TopicItemMore,
} from '../home_style';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
               <TopicItem>
                    <img 
                        className="topic-pic"
                        src="//upload.jianshu.io/collections/images/345460/u_1240372403_2153081336_fm_58.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/144/h/144/format/webp"
                        alt="python" 
                    />          
                    Python教程/练习题
               </TopicItem> 

               <TopicItemMore>           
                    更多热门专题 >
               </TopicItemMore> 
            </TopicWrapper>
        );
    }
}

export default Topic;