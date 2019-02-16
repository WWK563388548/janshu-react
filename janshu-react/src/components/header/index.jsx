import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearchField, SearchWrapper, AdditionalField, Button} from './header_style.js';

class Header extends Component {
    render() {
        return (
            <HeaderWrapper>
                <Logo href="/" />
                <Nav>
                    <NavItem
                        className="left active"
                    >
                        首页
                    </NavItem>
                    <NavItem
                        className="left"
                    >
                        下载APP
                    </NavItem>
                    <NavItem
                        className="right"
                    >
                        登陆
                    </NavItem>
                    <NavItem
                        className="right"
                    >
                        Aa
                    </NavItem>
                    <SearchWrapper>
                        <NavSearchField />
                        <i className="iconfont">&#xe653;</i>
                    </SearchWrapper>
                </Nav>
                <AdditionalField>
                    <Button className="writting">
                        <i
                            className="iconfont"
                            style={{
                                marginRight: '5px',
                            }}
                        >
                            &#xe624;
                        </i>
                        写文章
                    </Button>
                    <Button className="reg">注册</Button>
                </AdditionalField>
            </HeaderWrapper>
        );
    }
}

export default Header;