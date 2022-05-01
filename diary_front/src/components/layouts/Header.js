import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <>
    <div className='Header' style={{fontSize:"16px"}}>
    <Link to="/diary" style={{ textDecoration: 'none' }}><div className='headerNav'><label>Diary</label></div></Link>
    <Link to="/" style={{ textDecoration: 'none' }}><div className='headerNav'><label>Home</label></div></Link>
    <Link to="/theseday" style={{ textDecoration: 'none' }}><div className='headerNav'><label>Theseday</label></div></Link>
    </div>
    
    </>
    )
}

export default Header