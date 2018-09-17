import React, {Component} from 'react';

import Add from './components/add/add'
import List from './components/list/list'

export default class App extends Component {

  state = {
    comments:[
      {username:'Tom',content:'React太难了'},
      {username:'Jack',content:'React还不错'},
      {username:'白鹤',content:'React啊啊啊啊啊'}
    ]
  }

  addComponent = (comment) => {
    //获取当前状态
    const {comments} = this.state
    //修改状态
    comments.unshift(comment)
    //更新状态
    this.setState({
      comments
    })
  }

  deleteComponent = (index) => {
    //获取当前状态
    const {comments} = this.state
    //删除其中一条数据
    comments.splice(index,1)
    //更新数据
    this.setState(comments)

  }


  render () {

    const {comments} = this.state
    return (
      <div>
        <header className="site-header jumbotron">
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <h1>请发表对React的评论</h1>
              </div>
            </div>
          </div>
        </header>
        <div className="container">
          <Add addComponent={this.addComponent}/>
          <List comments={comments} deleteComponent={this.deleteComponent}/>
        </div>
      </div>
    )
  }
}
