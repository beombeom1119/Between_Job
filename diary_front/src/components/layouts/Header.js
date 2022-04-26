import React from 'react'
import pencil from '../images/pencil.png'

const Header = () => {
  return (
    <div className='Header'>&nbsp;<img src={pencil} style={{height:"22px", weight:"22px", marginTop:"-3px"}}></img>&nbsp;취준 일기</div>
  )
}

export default Header