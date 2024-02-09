import React from 'react'
import './home.css'
import Header from '../header/header'
import Shopping from '../shoping/shoping'
import { Outlet } from 'react-router-dom'

const Home = () => {

  return (
    <div className='home'>
      <Header/>
      <Outlet/>
      <Shopping/>
    </div>
  )
}

export default Home