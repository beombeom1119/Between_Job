import React from 'react'
import Human from '../images/human.png'
import Diary from '../images/diary.png'
import Home from '../images/home.png'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'


const Footer = () => {
  return (
    <div className='Footer'>
    <Link to="/mypage"><div className='bottomNav'><img src={Human}  alt="profile" style={{width:"40px",height:"40px"}}></img><label>Me</label></div></Link>
    <Link to="/"><div className='bottomNav'><img src={Home} alt="profile"  style={{width:"40px",height:"40px"}}></img><label>Home</label></div></Link>
    <Link to="/create"><div className='bottomNav'><img src={Diary}  alt="profile" style={{width:"40px",height:"40px"}}></img><label>Diary</label></div></Link>
    
    </div>
  )
}

export default Footer