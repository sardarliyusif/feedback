import React from 'react'
import { Button, Typography } from '../shared'
import './style.scss'

export const CommentForm = () => {
  return (
    <form className='comment__form'>
        <input className='comment__form__input' type="text" placeholder='Type your comment here' />
        <Button className='comment__form__button'><Typography size='small'>Post Comment</Typography></Button>
      </form>
  )
}
