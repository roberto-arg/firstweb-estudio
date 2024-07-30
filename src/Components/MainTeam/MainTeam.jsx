import React, { useEffect } from 'react'
import Admin from '../../Img/profile-circle.svg'
import H3 from '../H3/H3'
import H4 from '../H4/H4'
import P from '../P/P'
import './mainTeam.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainTeam() {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])


  return (
    <div id='mainTeam'>

      <div className='teamMain'>

        <div className='teamText' data-aos='fade-down' data-aos-delay='200'>
          <H3 className='teamTitle' text='Nuestro Equipo' />
        </div>

        <div className='teamAdmin' data-aos='fade-down' data-aos-delay='300'>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Agustina Vicente' />
            <P className='adminDesc' text='Contadora, recibida de la USAL, con experiencia en impuestos e industria fintech' />
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Sebastian Pereyra' />
            <P className='adminDesc' text='Procurador y abogado, recibido de la UBA, con especialización en el area de Derecho Tributario.' />
          </div>

          <div className='admin'>
            <img src={Admin} alt="" />
            <H4 className='adminTitle' text='Nadia Pereyra' />
            <P className='adminDesc' text='Abogada, recibida de la UBA, con especialización y experiencia en el area de Derecho Empresarial.' />
          </div>

        </div>

        <div className='teamDesc' data-aos='fade-down' data-aos-delay='400'>
          <P text='En nuestra consultoría jurídica, nos esforzamos por brindar un servicio excepcional y una atención al cliente de primer nivel. Creemos en la importancia de la transparencia y la comunicación abierta, por lo que nos aseguramos de trabajar en estrecha colaboración con nuestros clientes para comprender sus necesidades y objetivos específicos.' />
        </div>

      </div>

    </div>
  )
}
