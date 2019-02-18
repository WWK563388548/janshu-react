import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    TopicWrapper,
    TopicItem,
    TopicItemMore,
} from '../home_style';

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {
                    this.props.topicList.map(((item) => {
                        return (
                            <TopicItem key={item.get("id")}>
                                <img 
                                    className="topic-pic"
                                    src={item.get("image")}
                                    alt={item.get("title")}
                                />          
                                {item.get("title")}
                            </TopicItem> 
                        )
                    }))
                }
               
               <TopicItemMore href="#">           
                    更多热门专题 >
               </TopicItemMore> 
            </TopicWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(["home", "topicList"]),
});


export default connect(mapStateToProps, null)(Topic);