import React, {Component} from 'react'
import Comments from './Comments'
import toggleOpen from '../decorators/toggleOpen'

class CommentsList extends Component{

  static defaultProps = {
    comments : []
  }

  render(){

    const text = this.props.isOpen ? 'hide comments' : 'show comments'
    return (
      <div>
        <button onClick = {this.props.toggleOpen}>{text}</button>
        {this.getBody()}
      </div>
    )
  }

  getBody(){
    const {comments, isOpen} = this.props

    if(!isOpen) return null
    if(!comments.length) return <p>нет комментариев</p>

    return (
      <ul>
        {comments.map(comment => <li key = {comment.id}><Comments comment = {comment} /></li>)}
      </ul>
    )
  }

}

export default toggleOpen(CommentsList)
