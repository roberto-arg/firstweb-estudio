import React, { useState, useEffect } from 'react'
import { Link as Anchor } from 'react-router-dom'
import P from '../P/P'
import Span from '../Span/Span'
import WhatsApp from '../../Img/whatsapp.png'
import './navbar.css'


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false);


  // Cambio de estado en el Navbar cuando se scrollea 
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Cambio de color en navbar al hacer scroll
  const handleScroll = () => {
    const offset = window.scrollY;
    if (offset > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  return (

    <nav>
      <div className={scrolled ? "navbar scrolled" : "navbar"}>

        <div className={`nav_items ${isOpen && "open"}`}>
          <div className='porfile'>

            <div className='porfile-text'>
              <P text='Estudio Juridico Contable' />
              <P text='V & P' />
            </div>

          </div>

          <Anchor to='/'><P text='Inicio' /></Anchor>
          <Anchor to='/services'><P text='Servicios' /></Anchor>
          <Anchor to='/about'><P text='Nosotros' /></Anchor>
          <Anchor to='/prices'><P text='Honorarios' /></Anchor>
          <Anchor to='/contact'><P text='Contacto' /></Anchor>
          <Anchor to='/privacy'><P text='Politica de Privacidad'/></Anchor>
        </div>

        <div className={`nav_toggle  ${isOpen && "open"}`} onClick={() => setIsOpen(!isOpen)}>
          <Span />
          <Span />
          <Span />
        </div>

        <div className='navbar-right'>
          <div className='whatsapp-nav'>
            <a href="https://api.whatsapp.com/send?phone=+541122523564&text=Hola!%20Quisiera%20que%20me%20contacten%20por%20una%20consulta.%20Gracias."
              target="_blank" rel='noreferrer'>
              <img src={WhatsApp} alt="WhatsApp" />
            </a>
          </div>

          <div className='title-nav'>
            <P text='Estudio Juridico Contable' />
            <P text='V & P' />
          </div>
        </div>

      </div>

    </nav>
  )

}

export default Navbar
