import React, { Component } from 'react';
import List from './components/List';
import Recommand from './components/Recommand';
import Topic from './components/Topic';
import Writer from './components/Writer';
import {
    HomeWrapper,
    HomeLeft,
    HomeRight,
} from './home_style';

class Home extends Component {
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
            </HomeWrapper>
        );
    }
}

export default Home;