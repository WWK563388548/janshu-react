import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import {LoginWrapper, LoginBox, Input, Button} from './login_style';
import { handleLogin } from './store/actionCreators.js'


class Login extends Component {
        
    render() {
        if(!this.props.login){
            return (
                <LoginWrapper>
                    <LoginBox>
                        <Input placeholder="账号" ref={(input) => {this.account = input}}/>
                        <Input placeholder="密码" type="password" ref={(input) => {this.password = input}}/>
                        <Button onClick={() => this.props.handleLogin(this.account, this.password)}>登陆</Button>
                    </LoginBox>
                </LoginWrapper>
            );
        } else {
            return <Redirect to="/" />
        }
        
    }
}

const mapStateToProps = (state) => ({
    login: state.getIn(['login', 'login']),
});

const mapDispatchToProps = (dispatch) => ({
    handleLogin(accountElem, passwordElem) {
        console.log(accountElem, passwordElem);
        console.log(accountElem.value, accountElem.value);
        dispatch(handleLogin(accountElem.value, accountElem.value));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);