import React from 'react'
import pencil from '../images/pencil.png'
import Human from '../images/human.png'
import Diary from '../images/diary.png'
import Home from '../images/home.png'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='Header' style={{fontSize:"16px"}}>ㅤ{' '}<img src={pencil} alt="profile" style={{height:"18px", weight:"18px", marginTop:"-3px" ,marginRight:"3px"}}></img>ㅤ
    취준 일기
    <Link to="/mypage"><div className='bottomNav'><img src={Human}  alt="profile" style={{width:"25px",height:"25px"}}></img><label>Me</label></div></Link>
    <Link to="/"><div className='bottomNav'><img src={Home} alt="profile"  style={{width:"25px",height:"25px"}}></img><label>Home</label></div></Link>
    <Link to="/create"><div className='bottomNav'><img src={Diary}  alt="profile" style={{width:"25px",height:"25px"}}></img><label>Diary</label></div></Link>
    </div>
    
    </>
    )
}

export default Header