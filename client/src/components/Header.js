import React from 'react'
import { Link } from "react-router-dom";
import Home from '../images/home.png'

function Header() {
  return (
    <div className='header py-2 d-flex justify-content-center'>
        <p className='pb-1'>
            <Link to='/'>
                <img src={Home} alt="home" className='icon'/>
            </Link>
        </p>
    </div>
  )
}

export default Header