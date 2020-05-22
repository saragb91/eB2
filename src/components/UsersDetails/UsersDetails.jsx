import React,{useState, useEffect} from 'react';
import UsersList from '../UsersList'
import Chart from "react-google-charts";
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col";
import GoogleMapReact from "google-map-react";
import Marker from '../Maps/Marker'


import { Link } from "react-router-dom";

import './UsersDetails.css'

const UsersDetails = (props) => {
    
    const [user, setUser] = useState({})
    
    
    
    
    useEffect(() => {
        const search = UsersList.filter(
            (u) => u.id === parseInt(props.match.params.id)
            ).pop();
            setTimeout(() => setUser(search), 500);
            
            
        });
        
        
    //let latMap = user["maps"].map(ubi => (ubi.lat));
    //let lengMap = user["maps"].map(ubi => (ubi.lng))

    return (
        <>
        <Link to='/'>Volver</Link>
        <div className='headerUser'>
         <h3 className='h3User'>{user.name} {user.surname}</h3> 
         <img className='imageUser' src={user.picture} alt=""/>
         </div>


             <Row className='rowMapChart'>
                <Col md={6} className='colMapChart'>
                    <div className='chartGoogle' style={{ display: 'flex', maxWidth: 900 }}>
                    <Chart
                        width={550}
                        height={400}
                        chartType="ColumnChart"
                        loader={<div>Loading Chart</div>}
                        data={user.sleep}
                        
                        options={{
                        title: 'Horas de sueño de mayo',
                        chartArea: { width: '80%' },
                        hAxis: {
                            title: 'Días',
                            minValue: 0,
                        },
                        vAxis: {
                            title: 'Horas',
                        },
                        }}
                    />
                    </div>
                    </Col>

                    <Col md={5} className='colMapChart'>
                  
                        <div style={{ height: '100%', width: '100%' }}>
                            <GoogleMapReact
                                bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
                                center={[40.425, -3.693212]}
                                zoom={13}
                                >
                                <Marker
                                    //lat={latMap[0]}
                                   // lng={lengMap[0]}
                                    //text="Lugares"
                                />

                                <Marker
                                   // lat={latMap[1]}
                                    //lng={lengMap[1]}
                                   // text="Lugares"
                                />

                                <Marker
                                   // lat={latMap[3]}
                                   // lng={lengMap[3]}
                                   // text="Lugares"
                                />
                        
                            </GoogleMapReact>
                        </div>
                    </Col>

        </Row>
        
         </>

         );
}
 
export default UsersDetails;