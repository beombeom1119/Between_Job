import React from 'react'
import Human from '../images/human.png'

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='bottomNav'><img src={Human} style={{width:"40px",height:"40px"}}></img><label>Me</label></div>
    <div className='bottomNav'><img src={Human} style={{width:"40px",height:"40px"}}></img><label>Home</label></div>
    <div className='bottomNav'><img src={Human} style={{width:"40px",height:"40px"}}></img><label>Diary</label></div>
    </div>
  )
}

export default Footer