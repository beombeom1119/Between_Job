import React from 'react'
import Human from '../images/human.png'
import Diary from '../images/diary.png'
import Home from '../images/home.png'

const Footer = () => {
  return (
    <div className='Footer'>
    <div className='bottomNav'><img src={Human}  alt="profile" style={{width:"40px",height:"40px"}}></img><label>Me</label></div>
    <div className='bottomNav'><img src={Home} alt="profile"  style={{width:"40px",height:"40px"}}></img><label>Home</label></div>
    <div className='bottomNav'><img src={Diary}  alt="profile" style={{width:"40px",height:"40px"}}></img><label>Diary</label></div>
    </div>
  )
}

export default Footer