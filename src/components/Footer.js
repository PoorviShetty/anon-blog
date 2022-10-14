import React from 'react'
import Github from '../images/github.png'
import LinkedIn from '../images/linkedin.png'

function Footer() {
  return (
    <div className='footer py-2 d-flex justify-content-center'>
        <div className='icon-container'>
            <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer">
                <img src={Github} alt='github' className='icon px-3'/>
            </a>
            <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer">
                <img src={LinkedIn} alt='linkedin' className='icon px-3'/>
            </a>
        </div>
    </div>
  )
}

export default Footer