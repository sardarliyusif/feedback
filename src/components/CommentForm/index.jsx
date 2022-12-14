import { find } from 'lodash'
import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '../shared'
import './style.scss'

export const CommentForm = () => {
  const dispatch = useDispatch()
  const { id } = useParams()
  const feedbacks = useSelector((s) => s.feedback);
  const feedback = find(feedbacks, (e) => e.id === id);
  const inputEl = useRef(null);
  const handleAdd = () => {
    console.log(inputEl.current.value);
    inputEl.current.value = ""
  }
  return (
    <form className='comment__form'>
        <input className='comment__form__input' type="text" placeholder='Type your comment here' ref={inputEl}/>
        <Button onClick={() => handleAdd()} type='button' className='comment__form__button'><Typography size='small'>Post Comment</Typography></Button>
      </form>
  )
}
