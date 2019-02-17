import React, {Component} from 'react';
import {CSSTransition} from 'react-transition-group';
import { connect } from 'react-redux';
import * as actionCreators from './store/actionCreators';
import {
    HeaderWrapper,
    Logo, 
    Nav, 
    NavItem, 
    NavSearchField, 
    SearchWrapper, 
    AdditionalField, 
    Button, 
    SearchInfo, 
    SearchInfoTitle,
    SearchInfoSwitch,
    SearchInfoList,
    SearchInfoItem,
} from './header_style.js';

class Header extends Component {

    getListArea(){
        const newList = this.props.recommandList.toJS();
        // console.log(newList);
        const pagaList = [];
        if(newList.length){
            for(let i = (this.props.page - 1) * 10; i < this.props.page * 10; i++){
                pagaList.push(
                    newList[i] ? <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem> : null
                );
                
            }
        }

        if(this.props.focused || this.props.mouseIn){
            if(this.props.recommandList)
                return (
                    <SearchInfo 
                        onMouseEnter={this.props.handleMouseEnter}
                        onMouseLeave={this.props.handleMouseLeave}
                    >
                        <SearchInfoTitle>
                            热门搜索
                            <SearchInfoSwitch onClick={() => this.props.handleChangePage(this.props.page, this.props.totalPage)}>换一批</SearchInfoSwitch>
                        </SearchInfoTitle>
                        <SearchInfoList>
                            {pagaList}
                        </SearchInfoList>
                    </SearchInfo>
                );
        } else {
            return null;
        }
    }
    

    render() {
        // console.log(this.props);
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
                        {this.getListArea()}
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
        const header = {
            focused: state.get('header').get('focused'),
            recommandList: state.getIn(['header', 'recommandList']),
            page: state.getIn(['header', 'page']),
            totalPage: state.getIn(['header', 'totalPage']),
            mouseIn: state.getIn(['header', 'mouseIn']),
        }
        // console.log(state, header);
        return header;
};

const mapDispatchToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.getList());
            const action = actionCreators.searchFieldFocus();
            dispatch(action);
        },

        handleInputBlur() {
            const action = actionCreators.searchFieldBlur();
            dispatch(action);
        },
        handleMouseEnter() {
            dispatch(actionCreators.mouseEnter());
        },
        handleMouseLeave() {
            dispatch(actionCreators.mouseLeave());
        },
        handleChangePage(page, totalPage) {
            if(page < totalPage){
                dispatch(actionCreators.changePageList(page + 1));
            } else {
                dispatch(actionCreators.changePageList(1));
            }
        }

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);