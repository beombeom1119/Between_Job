import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Create from '../Create'
import Home from '../Home'
import Footer from './Footer'
import Header from './Header'
import MyPage from './MyPage'


const Content = () => {
  return (
    <div className='Content'>
    <BrowserRouter>
    <Header></Header>
    <Routes>
    <Route exact path="/" element={<Home></Home>} />
    {/* <Route path="/mypage" element= {<MyPage></MyPage>}></Route> */}
    <Route path="/create" element= {<Create></Create>}/>
    <Route path="/mypage" element= {<MyPage></MyPage>}/>
    </Routes>
    <Footer></Footer>
    </BrowserRouter>
    </div>
  )
}

export default Content