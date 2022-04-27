import React from 'react'
import pencil from '../images/pencil.png'

const Header = () => {
  return (
    <div className='Header' style={{fontSize:"16px"}}>ㅤ{' '}<img src={pencil} alt="profile" style={{height:"18px", weight:"18px", marginTop:"-3px" ,marginRight:"3px"}}></img>ㅤ취준 일기</div>
  )
}

export default Header