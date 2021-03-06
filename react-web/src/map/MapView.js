import React from "react";
import {GoogleMap, Marker, withGoogleMap, withScriptjs} from "react-google-maps";
import {useEffect, useState} from "react";
import { useLocation } from "react-router-dom";
import HouseMarker from "./HouseMarker";
import GA from "../shared/GA";

const mapCenter = {lat: 43.07411085808346, lng: -88.44808750766715};
const defaultZoom = 15;

const options = {
    styles: [
        {
            featureType: "poi.business",
            stylers: [{ visibility: "off" }],
        },
        {
            featureType: "transit",
            elementType: "labels.icon",
            stylers: [{ visibility: "off" }],
        },
    ]
}

const MapView = withScriptjs(
    withGoogleMap((props) => {
        const [currentInfoWindow, setCurrentInfoWindow] = useState(null);
        const [userLocation, setUserLocation] = useState(null);

        const location = useLocation();

        const houses = Object
            .values(props.houses)
            .filter(location => !isNaN(location.latitude) && !isNaN(location.longitude));

        GA.usePageTracking();

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

        useEffect(() => {
            document.body.scrollTop = document.documentElement.scrollTop = 0;
        }, [location]);

        return (
            <GoogleMap options={options} defaultZoom={defaultZoom} defaultCenter={mapCenter} onClick={(e) => setCurrentInfoWindow(null)}>
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
