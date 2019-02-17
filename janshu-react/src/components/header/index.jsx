import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
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
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames='slide'
                        >
                            <NavSearchField 
                                className={this.props.focused ? 'focused' : ''}
                                onFocus={this.props.handleInputFocus}
                                onBlur={this.props.handleInputBlur}
                            />
                        </CSSTransition>
                        <i 
                            className={this.props.focused ? 'focused iconfont' : 'iconfont'}
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

const mapStateToProps = (state) => {
        return {
            focused: state.header.focused,
        }
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            const action = actionCreators.searchFieldFocus();
            dispatch(action);
        },

        handleInputBlur() {
            const action = actionCreators.searchFieldBlur();
            dispatch(action);
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);