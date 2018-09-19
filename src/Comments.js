import React from 'react'

function Comments({comment}){
  return (
    <div>
      <p>{comment.text} <b>by {comment.user}</b></p>
    </div>
  )
}

export default Comments
