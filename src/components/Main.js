import React from 'react'
import { Routes, Route } from "react-router-dom";
import Home from './Home';
import Post from './Post'

function Main() {
  return (
    <div className='main'>
      <div className='container'>
        <div className='row d-flex justify-content-center'>
          <div className='col-md-7 py-3'>
            <Routes>
              <Route path="/post">
                <Route path=":slug" element={<Post />} />
                <Route path="" element={<Home />} />
              </Route>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main