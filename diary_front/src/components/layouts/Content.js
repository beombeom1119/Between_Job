import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../Create'
import Home from '../Home'


const Content = () => {
  return (
    <div className='Content'>
    <BrowserRouter>
    <Routes>
    <Route exact path="/" element={<Home></Home>}/>
    {/* <Route path="/mypage" element= {<MyPage></MyPage>}></Route> */}
    <Route path="/create" element= {<Create></Create>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}

export default Content