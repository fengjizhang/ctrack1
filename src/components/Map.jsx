import React, {  } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polyline} from 'react-leaflet'
import '../cssFiles/map.css';
// import issLogo from '../imgFiles/ISS.png';



function Map(props) {
    
    const currPosition = [props.data[0], props.data[1]];

    const processedPosition = [parseInt(currPosition[0]), parseInt(currPosition[1])];

    const allData = [];
    props.lineData.map((item) => {
        allData.push([item.latitude, item.longitude]);
    });

    console.log(allData);

    const greenOptions = { color: 'green' }   //line color

    return (
        <div className="headerTop">
            <MapContainer center={processedPosition} zoom={2} scrollWheelZoom={true} className="mapContainer">
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={processedPosition}>
                    
                    <Popup>
                    International Space Station<br /> 
                    Longitude: {currPosition[0]} <br />
                    Latitude: {currPosition[1]}
                    </Popup>
                </Marker>
                <Polyline pathOptions={greenOptions} positions={allData} />
                {/* {allData[0].map((item) => {
                    return (
                        <Marker position={[ item.latitude, item.longitude]}>was here</Marker>
                    );
                })} */}

                </MapContainer>
        </div>
    );
}

export default Map;
