import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useEffect, useState} from "react";
import HouseMarker from "./HouseMarker";

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
            <GoogleMap defaultZoom={defaultZoom} defaultCenter={mapCenter} onClick={(e) => setCurrentInfoWindow(null)}>
                {
                    userLocation && <Marker key="userLocation" position={userLocation} title="User Location"
                                            icon="/assets/current-location-dot-24x24.png"/>
                }
                {Object.entries(houses).map(([key, house]) => {
                    const isFavorited = props.favoriteHouses && props.favoriteHouses[house.houseId];
                    return <HouseMarker key={key} house={house} isFavorited={isFavorited}
                                        currentInfoWindow={currentInfoWindow}
                                        onHeartClicked={props.onHeartClicked}
                                        onSetCurrentInfoWindow={(infoWindow) => setCurrentInfoWindow(infoWindow)}/>
                })}
            </GoogleMap>
        );
    })
);

export default MapView;
