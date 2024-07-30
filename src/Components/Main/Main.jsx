import React from 'react'
import NavBar from '../Navbar/Navbar'
import Index from '../Index/Index'
import Footer from '../Footer/Footer'
import './main.css'

export default function Main() {
    return (
      <div className='main'>
        <NavBar className='navBar'/>
        <Index className='index'/>
        <Footer className='footer'/>
      </div>
    )
  }