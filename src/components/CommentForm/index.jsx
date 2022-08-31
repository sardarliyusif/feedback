import React from 'react'
import { Button, Typography } from '../shared'
import './style.scss'

export const CommentForm = ({value , show}) => {
  return (
    <form className={`${show ? "deactive" : "comment__form"}`}>
        <input className='comment__form__input' type="text" placeholder='Type your comment here' />
        <Button type='button' className='comment__form__button'><Typography size='small'>Post {value}</Typography></Button>
      </form>
  )
}
