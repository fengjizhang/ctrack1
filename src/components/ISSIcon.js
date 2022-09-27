import L from 'leaflet';

const ISSIcon = new L.Icon({
    iconUrl: require('../imgFiles/ISS.png'),
    iconRetinaUrl: require('../imgFiles/ISS.png'),
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(60, 75),
    className: 'leaflet-div-icon'
});

export { ISSIcon };