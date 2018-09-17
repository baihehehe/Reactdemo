import React, {Component} from 'react';
import PropTypes from 'prop-types'
import axios from 'axios'

export default class Main extends Component {

  static propTypes = {
    searchName: PropTypes.string.isRequired
  }

  state = {
    firstView: true,
    loading: false,
    users: [],
    errorMsg: ''
  }


  componentWillReceiveProps ({searchName}) {
    //更新状态
    this.setState ({
      firstView: false,
      loading: true
    })

    const url = `http://api.github.com/search/users?q=${searchName}`
    //发送请求
    axios.get(url)
        .then(response => {
          const users = response.data.items.map((item) =>({
            url: item.html_url,
            header_url: item.avatar_url,
            name: item.login
          }))
          this.setState({
            loading: false,
            users
          })

      })
      .catch(error => {
        this.setState({
          loading: false,
          errorMsg: '请求失败'
        })
      })

  }


  render () {
    const {firstView,loading,users,errorMsg} = this.state

    if (firstView){
      return <h2>请输入关键字搜索</h2>
    } else if (loading){
      return <h2>正在请求数据中...</h2>
    } else if (errorMsg){
      alert(errorMsg)
    } else {
      return (
        <div className="row">
          {
            users.map((user,index) => (
              <div className="card" key={index}>
                <a href={user.url} target="_blank">
                  <img src={user.header_url} style={{width: '100px'}}/>
                </a>
                <p className="card-text">{user.name}</p>
              </div>
            ))
          }
        </div>
      )
    }


  }
}
