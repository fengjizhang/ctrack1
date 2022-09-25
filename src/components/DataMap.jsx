import React, { useState, useEffect } from 'react';
import Map from './Map.jsx';
const axios = require('axios');

const MapData = () => {

  //get data here, and pass it down to map.
  const [currentCoords, setCurrentC] = useState([0,0]);

  useEffect( () => {

    if (currentCoords[0] === 0) {

        axios.get('http://api.open-notify.org/iss-now.json')
        .then( (res) => {
            // handle success
            setCurrentC([res.data.iss_position.latitude,res.data.iss_position.longitude]);
        })
        .catch((err) => {
            // handle error
            console.log(err);
        })

    }

}, [currentCoords])

  return (
    <div>
      <Map data={currentCoords} />
    </div>
  );
}

export default MapData;
