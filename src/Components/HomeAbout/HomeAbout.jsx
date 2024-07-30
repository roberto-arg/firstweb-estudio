import React, { useEffect } from 'react'
import './homeAbout.css'
import H2 from '../H2/H2'
import H3 from '../H3/H3'
import P from '../P/P'
import LogoTwo from '../../Img/Logo Two.png'
import { Link as Anchor } from 'react-router-dom'
import Team from '../MainTeam/MainTeam'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomeAbout() {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])


  return (
    <div className='homeAbout'>

        <div className='aboutWelcome' data-aos='fade-down' data-aos-delay='200'>
          <H2 text='Sobre Nosotros' />

          <div className='descriptionAbout' data-aos='fade-down' data-aos-delay='300'>
            <P text='En  Estudio Jurídico Contable VYP, somos un equipo de profesionales apasionados por nuestro trabajo y comprometidos con nuestros clientes. Nos destacamos por nuestra juventud y dinamismo, lo que nos permite estar en constante actualización y crecimiento, con el objetivo de brindar el mejor asesoramiento y servicio posible. Nos adaptamos a los cambios y desafíos que presenta el mundo de los negocios y las regulaciones impositivas y laborales, para asegurarnos de que nuestros clientes obtengan los mejores resultados. La relación cercana y personalizada con cada uno de ellos es nuestra prioridad, y nos enorgullece ser reconocidos por nuestro profesionalismo y excelencia en el trato con el cliente' />
          </div>

        </div>

        <div className='aboutUs'>

          <div className='aboutUsText' data-aos='fade-down' data-aos-delay='400'>
            <H2 text='Profesionales' />
            <P text='En nuestro estudio jurídico contable, entendemos que las personas y la sociedad están en constante cambio y evolución. Por eso, nos comprometemos a mantenernos actualizados y en constante aprendizaje para ofrecer soluciones adaptadas a las necesidades de nuestros clientes. Creemos en la importancia de estar a la vanguardia en cuanto a las regulaciones impositivas y laborales, y en brindar un servicio profesional y de calidad, siempre enfocado en las necesidades de nuestros clientes.'/>
          </div>

        </div>

        <div className='separator'></div>

        <Team />

        <div className='separator'></div>

        <div className='aboutContact'>

          <div className='aboutTitle' data-aos='fade-down' data-aos-delay='300'>
            <H3 text='Contactanos' />
          </div>

          <div className='about'>

            <div className='aboutLeft' data-aos='fade-down' data-aos-delay='400'>
              <P text='Si buscas una consultoría jurídica que pueda brindarte soluciones legales y fiscales efectivas y personalizadas, no dudes en contactarnos. Nuestro equipo de abogados y contadores está listo para ayudarte a cumplir con tus objetivos empresariales y mantener tu negocio en el camino del éxito.' />
              <Anchor to='/contact'>Contactanos</Anchor>
            </div>

            <div className='aboutRight' data-aos='fade-down' data-aos-delay='600'>
              <img src={LogoTwo} alt="logoContact" />
            </div>

          </div>

        </div>

        </div>

  )
}
