import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='Header' style={{fontSize:"16px"}}>ㅤ{' '}ㅤ
    <Link to="/diary"><div className='bottomNav'><label>Diary</label></div></Link>
    <Link to="/"><div className='bottomNav'><label>Home</label></div></Link>
    <Link to="/theseday"><div className='bottomNav'><label>Theseday</label></div></Link>
    </div>
    
    </>
    )
}

export default Header