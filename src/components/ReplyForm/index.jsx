import { find } from 'lodash'
import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { Button, Typography } from '../shared'
import './style.scss'

export const ReplyForm = ({ show , setAvtiveReply}) => {
  const { id } = useParams()
  const feedbacks = useSelector((s) => s.feedback);
  const feedback = find(feedbacks, (e) => e.id === id);
  
  const inputEl = useRef(null);
  const handleAdd = () => {
    console.log(inputEl.current.value);
    setAvtiveReply(null)
    inputEl.current.value = ""
  }
  return (
    <form className={`${show ? "reply__form" : "deactive"}`}>
        <input className='reply__form__input' type="text" placeholder='Type your comment here' ref={inputEl}/>
        <Button onClick={() => handleAdd()} type='button' className='reply__form__button'><Typography size='small'>Post Reply</Typography></Button>
      </form>
  )
}
