import React, {Component} from 'react';
import {NavBar,WingBlank,WhiteSpace,List,Button,InputItem} from 'antd-mobile'

import Logo from '../../components/logo/logo'

export default class Login extends Component {

  state = {
    username: '',
    password: ''
  }

  handleChange = (name,value) => {
    this.setState({
      [name]: value
    })
  }

  login = () => {
    console.log(this.state);
  }

  goRegister = () => {
    this.props.history.replace('/register')
  }


  render () {
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
          <Logo/>
        <WingBlank>
          <List>
            <WhiteSpace/>
            <InputItem 	placeholder='请输入用户名' onChange={(val) => this.handleChange('username',val)}>
              用户名：
            </InputItem>
            <WhiteSpace/>
            <InputItem type='password'	placeholder='请输入密码' onChange={(val) => this.handleChange('password',val)}>
              密码：
            </InputItem>
          </List>
          <WhiteSpace/>
        <Button type='primary' onClick={this.login}>登录</Button>
          <WhiteSpace/>
        <Button onClick={this.goRegister}>还没有账户</Button>
        </WingBlank>
      </div>
    )
  }
}
