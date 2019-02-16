import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import {HeaderWrapper, Logo, Nav, NavItem, NavSearchField, SearchWrapper, AdditionalField, Button} from './header_style.js';

class Header extends Component {

    constructor(props){
        super(props);

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);

        this.state = {
            focused: false,
        };
    }

    handleInputFocus() {
        this.setState({
            focused: true,
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false,
        });
    }

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
                        <CSSTransition
                            in={this.state.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearchField 
                                className={this.state.focused ? 'focused' : ''}
                                onFocus={this.handleInputFocus}
                                onBlur={this.handleInputBlur}
                            />
                        </CSSTransition>
                        <i 
                            className={this.state.focused ? 'focused iconfont' : 'iconfont'}
                        >
                            &#xe653;
                        </i>
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