import React, { Component } from 'react';
import { connect } from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button} from './login_style';
// import { getHomeData, toggleTopShow } from './store/actionCreators.js'


class Login extends Component {
        
    render() {
        return (
            <LoginWrapper>
                <LoginBox>
                    <Input placeholder="账号" />
                    <Input placeholder="密码" />
                    <Button>登陆</Button>
                </LoginBox>
            </LoginWrapper>
        );
    }
}

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(Login);