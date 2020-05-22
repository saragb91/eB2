import React from 'react';
import './Marker.css'

const Marker = ({color, name}) => {
    return ( 
        <div>
        <div className="pin bounce"
        style={{ backgroundColor: color, cursor: 'pointer' }}
        title={name}
        />
      <div className="pulse" /></div>
     );
}
 
export default Marker;