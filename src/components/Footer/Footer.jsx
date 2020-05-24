import React from 'react'
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import { BrowserRouter, Link } from "react-router-dom";

import './Footer.css'

const Footer = () => {
    return ( 
        
        <div className='divFooter'>
            <Row className='rowFooter'>
                <Col>
                    <Link to="/">
                        <img src="https://eb2.tech/wp-content/uploads/2018/07/eB2_Logo_transparente-160x160.png" alt=""/>
                    </Link>
                </Col>

                <Col>
                    <h4>Evidence-Based Behavior</h4>
                   
                    <p>Inteligencia Artificial al servicio del paciente</p>
                </Col>

                <Col className='colFooter'>
                    <p>Inicio</p>
                    <p>Solución</p>
                    <p>Productos</p>
                    <p>Compañía</p>
                    <p>Equipo</p>
                    <p>Contacto</p>
                    <p>Únete a eB2</p>
                    <p>Política de privacidad</p>
                </Col>

                <Col className='colFooter'>
                    <h4>Una spin-off de</h4>
                    
                    <img className='spinoff'src="https://eb2.tech/wp-content/uploads/2018/07/acronimo_nombrevertical-1-320x400.png" alt=""/>
                </Col>
            </Row>
        </div>
     );
}
 
export default Footer;