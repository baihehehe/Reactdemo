import React, {Component} from 'react';
import {NavBar,WingBlank,List,WhiteSpace,InputItem,Radio,Button} from 'antd-mobile'

import Logo from "../../components/logo/logo";

export default class Register extends Component {

  //初始化数据
  state = {
    username: '',
    password: '',
    password2: '',
    type: 'dashen'
  }

  //处理输入发生改变的监听回调
  handlerChang = (name,value) => {
   this.setState({
     [name]: value
   })
  }

  register = () => {
    console.log(this.state);
  }

  goLogin = () => {
    //编程式路由导航（跳转）
    this.props.history.replace('./login')
  }

  render () {

    const {type} = this.state
    return (
      <div>
        <NavBar>硅谷直聘</NavBar>
        <Logo/>
        <WingBlank>
        <List>
          <InputItem placeholder='请输入用户名' onChange={val => this.handlerChang('username',val)}>
            用户名：
          </InputItem>
          <InputItem type='password' placeholder='请输入密码' onChange={val => this.handlerChang('password',val)}>
            密码：
          </InputItem>
          <InputItem type='password' placeholder='请输入确认密码' onChange={val => this.handlerChang('password2',val)}>
            确认密码：
          </InputItem>
          <WhiteSpace/>
          <List.Item>
            <span>用户类型：</span>&nbsp;&nbsp;&nbsp;
            <Radio checked={type==='laoban'} onChange={() => this.handlerChang('type','laoban')}>老板</Radio>&nbsp;&nbsp;&nbsp;
            <Radio checked={type==='dashen'} onChange={() => this.handlerChang('type','dashen')}>大神</Radio>
          </List.Item>
          <WhiteSpace/>
          <Button type='primary' onClick={this.register}>注&nbsp;&nbsp;册</Button>
          <WhiteSpace/>
          <Button onClick={this.goLogin}>已有账户</Button>
        </List>
        </WingBlank>
      </div>
    )
  }
}
