import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup} from 'react-leaflet'
import '../cssFiles/map.css';
// import issLogo from '../imgFiles/ISS.png';

const axios = require('axios');

function Map() {

    const [currentCoords, setCurrentC] = useState([0.0, 0.0]);
    
    useEffect( () => {

        if (currentCoords[0] === 0.0) {

            axios.get('http://api.open-notify.org/iss-now.json')
            .then( (res) => {
                // handle success
                console.log(res);
                setCurrentC([res.data.iss_position.latitude,res.data.iss_position.longitude]);
            })
            .catch((err) => {
                // handle error
                console.log(err);
            })
    
        }

    })

    



    //TODO --edit
    return (
        <div className="headerTop">
            {console.log('test!', currentCoords.toString())}
            <MapContainer center={currentCoords} zoom={2} scrollWheelZoom={true} className="mapContainer">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={currentCoords}>
                    
                    <Popup>
                    International Space Station<br /> 
                    Longitude: {currentCoords[0]} <br />
                    Latitude: {currentCoords[1]}
                    </Popup>
                </Marker>
                </MapContainer>
        </div>
    );
}

export default Map;
