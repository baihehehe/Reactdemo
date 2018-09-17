import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './item.css'

export default class Item extends Component {

  static propTypes = {
    comment: PropTypes.object.isRequired,
    deleteComponent: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired
  }

  deleteClick = () => {
    const {comment,index,deleteComponent} = this.props

    if (window.confirm(`确定要删除${comment.username}吗`)){
        deleteComponent(index)
    }

  }

  render () {
    const {username,content} = this.props.comment
    return (
      <li className="list-group-item">
        <div className="handle">
          <a href="javascript:;" onClick={this.deleteClick}>删除</a>
        </div>
        <p className="user"><span >{username}</span><span>说:</span></p>
        <p className="centence">{content}</p>
      </li>
    )
  }
}
