import React from 'react'
import Lead from '../images/preview.jpg'
import { Link } from "react-router-dom";

function Preview() {

  const content = `We never thought of findin' a place where we belong. Don't have to stand alone, we'll never let you fall. Don't need permission to decide what you believe. You gotta learn something when we meet you after school. I said jump, down on Jump Street. I said jump, down on Jump Street. Your friends will be there when your back is to the wall. You'll find you'll need us cause there's no one else to call. When it was hopeless a decision is what you need. You'd better be ready cause' your runnin' outta time. Say jump, 21 Jump, Street.`

  const toShow = content.substring(0, 250) + "...";

  return (
    <>
      <div className='blog-review py-2'>
          <h3 className='text-center fw-bold m-0'>
            This is the Title!
          </h3>
          <p className='text-center'>
            01 January, 2000
          </p>
          <img src={Lead} alt='preview' className='blog-preview-img pb-3' />
          <p className='blog-preview'>
            {toShow}
            <Link to="/post/article">Home</Link>
          </p>
          <hr/> 
      </div>
    </>

  )
}

export default Preview