import React, {Component} from 'react';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearchField, AdditionalField, Button} from './header_style.js';

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
                    <NavSearchField />
                </Nav>
                <AdditionalField>
                <Button className="writting">写文章</Button>
                    <Button className="reg">注册</Button>
                </AdditionalField>
            </HeaderWrapper>
        );
    }
}

export default Header;