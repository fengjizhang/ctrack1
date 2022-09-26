import React, { useState, useEffect } from 'react';
import Map from './Map.jsx';
const axios = require('axios');

const getTimestampInSeconds  = () => {
  return Math.floor(Date.now() / 1000);
}

const MapData = (props) => {

  //get data here, and pass it down to map.
  let currentCoords = props.currentLocation;
    
  const [lineCoords, setLineCoords] = useState([]);

  let timeStamps = [];


  useEffect( () => {
    
    const firstTimeStamp = getTimestampInSeconds() - 1800;
    
    for (let i = 0; i < 10; i++) {
      timeStamps.push(firstTimeStamp + 180 * i);
    }

    if (currentCoords[0] === 0) {

        axios.get(`https://api.wheretheiss.at/v1/satellites/25544/positions?timestamps=${timeStamps[0]},${timeStamps[1]},${timeStamps[2]},${timeStamps[3]},${timeStamps[4]},${timeStamps[5]},${timeStamps[6]},${timeStamps[7]},${timeStamps[8]},${timeStamps[9]}}&units=km`)
        .then( (res) => {
            // handle success
            // console.log('timestamps', timeStamps);
            // console.log('datanap', res);
            //Diagnostics...
            setLineCoords(res.data);
        })
        .catch((err) => {
            // handle error
            console.log(err);
        })

    }

}, [currentCoords])

  return (
    <div>
      <Map data={currentCoords} lineData={lineCoords} />
    </div>
  );
}

export default MapData;
