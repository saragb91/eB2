import React from 'react';
import './Marker.css'

const Marker = () => {
    return ( 
        <div>
          <div className="pin bounce" style={{ cursor: 'pointer' }} />
        <div className="pulse" />
      </div>
     );
}

export default Marker;