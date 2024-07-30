import React, { useEffect } from 'react'
import dTributario from '../../Img/bank.svg'
import dLaboral from '../../Img/user.svg'
import dFamiliar from '../../Img/home.svg'
import dCivil from '../../Img/journal.svg'
import P from '../P/P'
import H3 from '../H3/H3'
import H4 from '../H4/H4'
import './mainInfo.css'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function MainInfo() {

  useEffect(() => {
    AOS.init({
        duration: 800
    });
  }, [])


  return (
    <div id='main'>

      <div className='mainInfo'>

        <div className='infoText' data-aos='fade-down' data-aos-delay='200'>
          <H3 className='infoTitle' text='¿Necesitas asesoramiento legal para tu empresa o negocio?' />
          <P className='descTitle' text='Nuestro equipo de abogados expertos en derecho empresarial y civil está listo para ayudarte con cualquier problema legal que puedas tener, desde la redacción de contratos hasta la representación en procesos judiciales. Además, nuestro enfoque centrado en el cliente significa que te brindamos la atención y el apoyo que necesitas en cada paso del camino.' />
        </div>

        <div className='infoDesc'>

          <div className='descInfo-1' data-aos='fade-down' data-aos-delay='300'>

            <div className='desc'>
              <div className='title'>
                <img src={dCivil} alt=""/>
                <H4 className='cardTitle' text='Derecho Civil' />
              </div>
              <P className='descInfo' text='Accidentes de transito. Contratos y alquileres, desalojos. Prescripción adquisitiva corta y larga. Daños y Perjuicios. Amparos.' />
            </div>

            <div className='desc'>
              <div className='title'>
                <img src={dLaboral} alt="" />
                <H4 className='cardTitle' text='Derecho Laboral' />
              </div>
              <P className='descInfo' text='No cometas errores, nosotros te asesoramos inscribiendo a tu empleado como corresponde. Accidentes de Riesgo de Trabajo. Despidos.' />
            </div>

          </div>

          <div className='descInfo-2' data-aos='fade-down' data-aos-delay='400'>

          <div className='desc'>
              <div className='title'>
                <img src={dTributario} alt="" />
                <H4 className='cardTitle' text='Derecho Tributario' />
              </div>
              <P className='descInfo' text='Presentaciones administrativas ante los entes recaudadores. Te asesoramos para evitar que llegues a embargos.' />
            </div>

            <div className='desc'>
              <div className='title'>
                <img src={dFamiliar} alt="" />
                <H4 className='cardTitle' text='Derecho de Familia' />
              </div>
              <P className='descInfo' text='Divorcios, con acuerdo y sin acuerdo. Regimén de comunicación, alimentos, convenios reguladores, permisos de viajes y sucesiones.' />
            </div>

          </div>

        </div>

      </div>

    </div>
  )
}
