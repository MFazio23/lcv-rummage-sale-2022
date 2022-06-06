import {InfoWindow, Marker} from "react-google-maps";
import HouseInfoWindow from "./HouseInfoWindow";
import React from "react";

const HouseMarker = (props) => {
    const house = props.house;
    return <Marker position={{lat: house.latitude, lng: house.longitude}}
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
                       props.onSetCurrentInfoWindow(house.houseId)
                   }}
    >
        {props.currentInfoWindow === house.houseId &&
            <InfoWindow key={`${props.houseId}-info`} onCloseClick={() => props.onSetCurrentInfoWindow(null)}>
                <HouseInfoWindow house={house} isFavorited={props.isFavorited}
                                 onHeartClicked={props.onHeartClicked}/>
            </InfoWindow>}
    </Marker>
}

export default HouseMarker;