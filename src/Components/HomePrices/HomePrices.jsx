import React, { useEffect } from 'react'
import './homePrices.css'
import H2 from '../H2/H2'
import H3 from '../H3/H3'
import P from '../P/P'
import Span from '../Span/Span'
import LogoTwo from '../../Img/Logo Two.png'
import { Link as Anchor } from 'react-router-dom'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function HomePrices() {

    useEffect(() => {
        AOS.init({
            duration: 800
        });
      }, [])

      
    return (
        <div className='homePrices'>

            <div className='textPrices' data-aos='fade-down' data-aos-delay='200'>
                <H2 text='Honorarios'/>
                <P text='Según lo establece la ley de honorarios profesionales.' />
                <Span text='Los honorarios de los abogados, procuradores y auxiliares de la justicia que por su actividad judicial o extrajudicial, administrativa en trámites de mediación actuaren como patrocinantes o como representantes, o como auxiliares de la justicia, cuando la competencia correspondiere a los tribunales con asiento en la Capital Federal y los Tribunales Federales, como así toda actividad profesional desplegada en la Ciudad de Buenos Aires, se regularán de acuerdo con esta ley. La presente ley es de orden Público.' />
            </div>

            <div className='separator'></div>

            <div className='aboutContact'>

                <div className='aboutTitle' data-aos='fade-down' data-aos-delay='400'>
                    <H3 text='Contactanos' />
                </div>

                <div className='about'>

                    <div className='aboutLeft' data-aos='fade-down' data-aos-delay='600'>
                        <P text='Si buscas una consultoría jurídica que pueda brindarte soluciones legales y fiscales efectivas y personalizadas, no dudes en contactarnos. Nuestro equipo de abogados y contadores está listo para ayudarte a cumplir con tus objetivos empresariales y mantener tu negocio en el camino del éxito.' />
                        <Anchor to='/contact'>
                            <Span text='Contactanos' />
                        </Anchor>
                    </div>

                    <div className='aboutRight' data-aos='fade-down' data-aos-delay='800'>
                        <img src={LogoTwo} alt="logoContact" />
                    </div>

                </div>

            </div>

        </div>
    )
}
