import React from 'react'
import { CommentForm } from '../CommentForm'
import { Card, Typography } from '../shared'


export const AddComment = () => {
  return (
    <Card direction='column'>
      <Typography color='purple' weight='bold'>Add Comment</Typography>
      <CommentForm/>
    </Card>
  )
}
