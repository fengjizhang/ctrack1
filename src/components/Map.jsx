import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../cssFiles/map.css';
const axios = require('axios');

function Map() {

    const [coordindates, setC] = useState([[],[]]);

    const [currentCoords, setCurrentC] = useState([0.0, 0.0]);
    
    if (currentCoords[0] === 0.0) {

        axios.get('http://api.open-notify.org/iss-now.json')
        .then( (res) => {
            // handle success
            console.log(res);
            // setCurrentC([res.data.iss_position.latitude,res.data.iss_position.longitude]);
        })
        .catch((err) => {
            // handle error
            console.log(err);
        })

    }
    
    //TODO --edit
    return (
        <div className="headerTop">
            <p>{coordindates}</p>

            <MapContainer center={[currentCoords[0], currentCoords[1]]} zoom={5} scrollWheelZoom={true} className="mapContainer">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[currentCoords[0], currentCoords[1]]}>
                    <Popup>
                    Current ISS Location<br /> 
                    </Popup>
                </Marker>
                </MapContainer>
        </div>
    );
}

export default Map;
