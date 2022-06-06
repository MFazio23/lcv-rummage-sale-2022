import {GoogleMap, InfoWindow, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useEffect, useState} from "react";
import HouseInfoWindow from "./HouseInfoWindow";

const mapCenter = {lat: 43.07411085808346, lng: -88.44808750766715};
const defaultZoom = 15;

const MapView = withScriptjs(
    withGoogleMap((props) => {
        const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
        const [userLocation, setUserLocation] = useState(null);

        const houses = Object
            .values(props.houses)
            .filter(location => !isNaN(location.latitude) && !isNaN(location.longitude));

        useEffect(() => {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition((pos) => {
                    setUserLocation({
                        lat: pos.coords.latitude,
                        lng: pos.coords.longitude,
                    })
                })
            }
        }, []);

        return (
            <GoogleMap defaultZoom={defaultZoom} defaultCenter={mapCenter}>
                {
                    userLocation && <Marker key="userLocation" position={userLocation} title="User Location"
                                            icon="/assets/current-location-dot-24x24.png"/>
                }
                {Object.entries(houses).map(([key, house]) => {
                    const isFavorited = props.favoriteHouses && props.favoriteHouses[house.houseId];
                    return <Marker key={key}
                                   position={{lat: house.latitude, lng: house.longitude}}
                                   title={house.address}
                                   label={{
                                       text: house.houseId,
                                       color: 'white',
                                       fontFamily: 'monospace'
                                   }}
                                   icon={{
                                       url: '/assets/maps-poi-marker-blue-24x38.png',
                                       labelOrigin: new window.google.maps.Point(12, 13)
                                   }}
                                   onClick={(e) => {
                                       setCurrentInfoWindow(house.houseId)
                                   }}
                    >
                        {currentInfoWindow === house.houseId &&
                            <InfoWindow key={`${key}-info`} onCloseClick={() => setCurrentInfoWindow(null)}>
                                <HouseInfoWindow house={house} isFavorited={isFavorited}
                                                 onHeartClicked={props.onHeartClicked}/>
                            </InfoWindow>}
                    </Marker>
                })}
            </GoogleMap>
        );
    })
);

export default MapView;
