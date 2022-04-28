import React from 'react'
import Pencil from '../images/Pencil.png'
import Book from '../images/Book.png'
import Calendar from '../images/Calendar.png'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='container'>
    <div className='box'><div><Link to="/create"><img src={Pencil}></img></Link><h1>Write</h1></div></div>
    <div className='box'><div><Link to="/diary"><img src={Book}></img></Link><h1>Diary</h1></div></div>
    <div className='box'><div><Link to="/theseday"><img src={Calendar}></img></Link><h1>Theseday</h1></div></div>
    </div>
  )
}

export default Home