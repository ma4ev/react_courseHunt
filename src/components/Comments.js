import React from 'react'
import PropTypes from 'prop-types'

function Comments({comment}){
  return (
    <div>
      <p>{comment.text} <b>by {comment.user}</b></p>
    </div>
  )
}

Comments.propTypes = {
  comment: PropTypes.shape({
    user: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired
}

export default Comments
