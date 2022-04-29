import React from 'react'
import Pencil from './images/Pencil.png'
import Book from './images/Book.png'
import Calendar from './images/Calendar.png'
import { Link } from 'react-router-dom'
import Header from './layouts/Header'

const Home = () => {
  return (
    <>
    <Header></Header>
    <div className='container'>
    <div className='box'><div><Link to="/write"><img src={Pencil} alt="Write"></img></Link><h1>Write</h1></div></div>
    <div className='box'><div><Link to="/diary"><img src={Book} alt="Diary"></img></Link><h1>Diary</h1></div></div>
    <div className='box'><div><Link to="/theseday"><img src={Calendar} alt="Theseday"></img></Link><h1>Theseday</h1></div></div>
    </div>
    
    </>
  )
}

export default Home