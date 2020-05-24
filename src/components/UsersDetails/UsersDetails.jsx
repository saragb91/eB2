import React, { useState, useEffect } from "react";
import UsersList from "../UsersList";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import Chart from "react-google-charts";
import GoogleMapReact from "google-map-react";
import Marker from "../Markers/Marker";
import "./UsersDetails.css";
import PropTypes from "prop-types";

const UsersDetails = (props) => {

  const [user, setUser] = useState({});
  
  useEffect(() => {
    const search = UsersList.filter(
      (u) => u.id === parseInt(props.match.params.id)
      ).pop();
      setTimeout(() => setUser(search), 1500);
    });

  
  return (

    <>

    {Object.keys(user).length===0 ? (
      <>
      <div className="containerCharge">{" "}
           <div id="charge"></div>
      </div>
      </>
    ) : (
      <>
      <div className='divReturn'>
        <Link className='return' to="/">Volver</Link>
      </div>
      <div className="headerUser">
        <h3 className="h3User">{user.name} {user.surname}</h3>
      </div>
      <Row className="rowMapChart">
        <Col md={6} className='colUser'>
          <img className="imageUser" src={user.picture} alt="userPhoto" />
        </Col>

        <Col md={6} className="colMapChart">
          <h5 className='h5Charat'>Horas de sueño en el mes de Mayo:</h5>
          <div className="chartGoogle" style={{ display: "flex", maxWidth: 900 }}>
            <Chart
              width={550}
              height={400}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={user.sleep}
              options={{
                
                bar: { groupWidth: '75%' },
                colors:['#5f7080' ],
                chartArea: { width: "85%" },
                hAxis: {
                  title: "Días",
                  minValue: 0,
                },
                vAxis: {
                  title: "Horas",
                },
              }}
              />
          </div>
        </Col>
      </Row>  

        <h5 className='h5User'>Últimos desplazamientos de {user.name}:</h5>
        <div className="googleMaps">
          <div style={{ height: "100%", width: "100%", marginLeft: '10%'}}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
              center={[40.435, -3.693212]}
              zoom={12.7}
            >
              {UsersList[props.match.params.id].maps.map(elm=> <Marker lat={elm.lat} lng={elm.lng} text="Lugares" />)} 
            </GoogleMapReact>
          </div>
        </div>
        </>
     ) }
    </>
  );
};

UsersDetails.propTypes = {
  userList: PropTypes.array.isRequired,
};

export default UsersDetails;
