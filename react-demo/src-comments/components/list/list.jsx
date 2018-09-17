import React, {Component} from 'react';
import PropTypes from 'prop-types'

import './list.css'
import Item from '../item/item'

export default class List extends Component {

  static propTypes = {
    comments: PropTypes.array.isRequired,
    deleteComponent: PropTypes.func.isRequired
  }
  render () {
    const {comments,deleteComponent} = this.props

    const display = comments.length>0 ? 'none' : 'block'
    return (
      <div className="col-md-8">
        <h3 className="reply">评论回复：</h3>
        <h2 style={{display}}>暂无评论，点击左侧添加评论！！！</h2>
        <ul className="list-group">
          {
            comments.map((comment,index) =>
              (<Item key={index} comment={comment} deleteComponent={deleteComponent} index={index}/>))
          }
        </ul>
      </div>
    )
  }
}
