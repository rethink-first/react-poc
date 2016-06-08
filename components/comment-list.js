'use strict'

import React, { PropTypes } from 'react'
import Comment from './comment'

// stateless component
const CommentList = (props) => {

  const commentNodes = props.data.map((comment, i) => {
    console.log("I AM TEAM!!")
    console.log(comment.team)
    return (
      <Comment key={i}>
        {comment.team.name}
        {comment.team.slug}
        {comment.team.teamId}
      </Comment>
    )
  })

return (
    <div className='comment-list'>
        {commentNodes}
    </div>
)

}

export default CommentList
