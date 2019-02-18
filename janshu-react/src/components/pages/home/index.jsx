import React, { Component } from 'react';
import List from './components/List';
import Recommand from './components/Recommand';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { connect } from 'react-redux';
import { getHomeData, toggleTopShow } from './store/actionCreators.js'
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
    BackTop,
} from './home_style';

class Home extends Component {

    BackToTop() {
        window.scrollTo(0, 0);
    }

    componentDidMount() {
        this.props.setHomeData();
        this.bindEvents();
    }

    // 监听滚动距离
    bindEvents() {
        window.addEventListener('scroll', this.props.changScrollToShow);
    }

    // 组件解除时，移除window中的监听器
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changScrollToShow);
    }
        
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img
                        className="banner-img" 
                        src="//upload.jianshu.io/admin_banners/web_images/4612/1e4eeb1b277034cca932f5e60e46d14b0629073b.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
                        alt="banner image"
                    />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommand />
                    <Writer />
                </HomeRight>
                {

                    this.props.showScroll ? 
                    <BackTop onClick={this.BackToTop}>回到顶部</BackTop>
                    :
                    null
                }
            </HomeWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    // 是否显示返回顶部按钮
    showScroll: state.getIn(["home", "showScroll"]),
});

const mapDispatchToProps = (dispatch) => ({
    setHomeData(){
       const action = getHomeData();
       dispatch(action);
    },
    changScrollToShow() {
        if(document.documentElement.scrollTop > 300){
            dispatch(toggleTopShow(true));
        } else {
            dispatch(toggleTopShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);