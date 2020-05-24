import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import './Footer.css'

const Footer = () => {
    return ( 
        <div className='divFooter'>
            <Row className='rowFooter'>
                <Col>
                <img src="https://eb2.tech/wp-content/uploads/2018/07/eB2_Logo_transparente-160x160.png" alt=""/>
                </Col>

                <Col>
                <h4>Evidence-Based Behavior</h4>
                <hr/>
                <p>Inteligencia Artificial al servicio del paciente</p>
                </Col>

                <Col>
                <p>Inicio</p>
                <p>Solución</p>
                <p>Productos</p>
                <p>Compañía</p>
                <p>Equipo</p>
                </Col>

                <Col>
                <h4>Una spin-off de</h4>
                <hr/>
                <img className='spinoff'src="https://eb2.tech/wp-content/uploads/2018/07/acronimo_nombrevertical-1-320x400.png" alt=""/>
                </Col>
            </Row>
        </div>
     );
}
 
export default Footer;