import React from 'react'
import Lead from '../images/preview.jpg'
import { Link } from "react-router-dom";
import useFetch from '../hooks/useFetch'

function Preview(date) {
  const { data, error } = useFetch(
    process.env.REACT_APP_BACKEND_URL + 'post/' + date.data
  );
  
  if (error) console.log(error);
  
  return (
    <>
      <div className='blog-review py-2'>
          <h3 className='text-center fw-bold m-0'>
            {data && data.title}
          </h3>
          <p className='text-center'>
            {data && data.date}
          </p>
          <img src={Lead} alt='preview' className='blog-preview-img pb-3' />
          <p className='blog-preview'>
            {data && data.text.substring(0, 280) + "..."} &nbsp;
            <Link to={`/post/${date.data}`}>Read More</Link>
          </p>
          <hr/> 
      </div>
    </>

  )
}

export default Preview