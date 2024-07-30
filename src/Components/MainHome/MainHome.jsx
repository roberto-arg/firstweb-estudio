import React, { useEffect } from 'react'
import './mainHome.css'
import H2 from '../H2/H2'
import P from '../P/P'
import Span from '../Span/Span'
import { Link as Anchor } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainHome() {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
      }, [])


    return (
        <div className='home' data-aos='fade-down' data-aos-delay='100'>
            <H2 text='¿Necesitas ayuda legal o contable?'/>
            <P text='¡Podemos ayudarte!'/>
            <div className='homeDesc' data-aos='fade-down' data-aos-delay='200'>
                <Span id='descHome' text='En el Estudio Jurídico Contable V & P, ofrecemos una amplia gama de servicios legales y contables para ayudarte en todo lo que necesites. Desde asesoría fiscal y contable hasta litigios civiles y comerciales. Contáctanos hoy para obtener más información sobre cómo podemos ayudarte a resolver tus problemas legales y contables.'/>
            </div>
            <Anchor to='/contact' data-aos='fade-down' data-aos-delay='300' className='homeButton'>Contactanos</Anchor>
        </div>
    )
}
