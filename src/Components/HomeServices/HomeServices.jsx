import React, { useEffect } from 'react'
import './homeServices.css'
import H2 from '../H2/H2'
import H4 from '../H4/H4'
import P from '../P/P'
import Balance from '../../Img/balance.svg'
import Laboral from '../../Img/laboral.svg'
import Transito from '../../Img/transito.svg'
import Sueldos from '../../Img/sueldos.svg'
import DJurada from '../../Img/djurada.svg'
import Tributario from '../../Img/tributaria.svg'
import Civil from '../../Img/civil.svg'
import Familia from '../../Img/familia.svg'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeServices() {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])


  return (
    <div className='homeServices'>

      <div className='bannerServices' data-aos='fade-down' data-aos-delay='100'>
        <H2 text='Servicios' />
      </div>

      <div className='titleServices' data-aos='fade-down' data-aos-delay='100'>
        <H2 text='Nuestros servicios' />
      </div>

      <div className='descServices'>
        
        <div className='services' data-aos='fade-down' data-aos-delay='300'>
          <img src={Tributario} alt="" className='tributario' />
          <H4 text='Derecho Tributario' />
          <P text='Te brindamos soluciones personalizadas para cumplir con regulaciones fiscales y presentaciones administrativas a tiempo. Trabajamos contigo para entender tus objetivos y ofrecerte la mejor atención al cliente.' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='350'>
          <img src={Laboral} alt="" />
          <H4 text='Derecho Laboral' />
          <P text='Te asesoramos en la gestión de tus empleados, desde la correcta inscripción hasta la liquidacion de sueldos y prestaciones. Nuestros abogados van a poder guiarte en accidentes laborales y despidos.' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='400'>
          <img src={Civil} alt="" />
          <H4 text='Derecho Civil' />
          <P text='Nos ocupamos de una amplia variedad de casos, desde accidentes de tráfico hasta contratos y alquileres, desalojos, prescripción adquisitiva corta y larga, daños y perjuicios y amparos. ' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='450'>
          <img src={Balance} alt="" />
          <H4 text='Presentación de Balances' />
          <P text='Nos encargamos de la preparación del balance, realizando los asientos necesarios y trabajando en la optimización de tus procesos contables' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='500'>
          <img src={Transito} alt="" />
          <H4 text='Accidentes de Transito' />
          <P text='Nos encargamos de brindarte el asesoramiento que necesitas para realizar correctamente el reclamo, asegurando que recibas la compensación que mereces. Trabajamos de manera eficiente y rápida para que no pierdas tiempo en trámites innecesarios.' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='550'>
          <img src={DJurada} alt="" />
          <H4 text='Presentación de DDJJ' />
          <P text='Realizamos las presentaciones de tus impuestos de manera efectiva y en tiempo y forma. Ya sea que necesites presentar tu declaración jurada de ganancias o de bienes personales, nuestro equipo de abogados y contadores altamente capacitados están aquí para brindarte soluciones personalizadas.' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='600'>
          <img src={Familia} alt="" />
          <H4 text='Derecho de Familia' />
          <P text='Ofrecemos soluciones efectivas y personalizadas para una amplia variedad de asuntos, desde divorcios con acuerdo o sin acuerdo hasta temas relacionados con el régimen de comunicación, convenios reguladores, permisos de viajes y sucesiones.' />
        </div>

        <div className='services' data-aos='fade-down' data-aos-delay='650'>
          <img src={Sueldos} alt="" />
          <H4 text='Liquidacion de sueldos' />
          <P text='Te ofrecemos un servicio de liquidación de sueldos, contamos con amplio conocimiento en los convenios colectivos de trabajo. Nos encargamos de que tus empleados reciban su salario correctamente, asegurandote el cumplimiento de las regulaciones laborales y tributarias.' />
        </div>

      </div>

    </div>
  )
}
