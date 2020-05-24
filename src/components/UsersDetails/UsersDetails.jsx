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
      setTimeout(() => setUser(search), 500);
    });

  return (
    <>
      <Link to="/">Volver</Link>
      <div className="headerUser">
        <h3 className="h3User">{user.name} {user.surname}</h3>
        <img className="imageUser" src={user.picture} alt="" />
      </div>

      <Row className="rowMapChart">
        <Col md={6} className="colMapChart">

          <div className="chartGoogle" style={{ display: "flex", maxWidth: 900 }}>
            <Chart
              width={550}
              height={400}
              chartType="ColumnChart"
              loader={<div>Loading Chart</div>}
              data={user.sleep}
              options={{
                title: "Horas de sueño de mayo",
                chartArea: { width: "80%" },
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

        <Col md={5} className="colMapChart">
          <div style={{ height: "100%", width: "100%" }}>
            <GoogleMapReact
              bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
              center={[40.425, -3.693212]}
              zoom={13}
            >
              {UsersList[props.match.params.id].maps.map(elm=> <Marker lat={elm.lat} lng={elm.lng} text="Lugares" />)}
   
            </GoogleMapReact>
          </div>
        </Col>
      </Row>
    </>
  );
};

UsersDetails.propTypes = {
  userList: PropTypes.array.isRequired,
};

export default UsersDetails;
