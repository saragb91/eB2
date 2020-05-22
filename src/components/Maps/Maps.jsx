import React from 'react'
import GoogleMapReact from "google-map-react";
import Marker from '../Maps/Marker'




const Maps = ({lat, leng}) => {

   
    console.log(lat)
    return (
        
        <div style={{ height: '100%', width: '100%' }}>
        <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_API_KEY }}
        center={[40.425, -3.693212]}
        zoom={13}
        >
        <Marker
        lat={lat}
        lng={leng}
        text="Lugares"
        />
       
        </GoogleMapReact>
    </div>
     );
}
 
export default Maps;