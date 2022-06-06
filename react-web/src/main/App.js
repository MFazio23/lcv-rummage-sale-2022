import React from "react";
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MapView from "../map/MapView";
import HomeView from "../home/HomeView";
import ListView from "../list/ListView";
import BottomNav from "./BottomNav";
import {withStyles} from "@mui/styles";
import {useEffect, useState} from "react";
import {getHouses} from "../data/firebase-db";

const styles = theme => ({
    bottomNavSpacer: theme.mixins.toolbar
});

const style = withStyles(styles);

const googleMapUrl = "https://maps.googleapis.com/maps/api/js?key=AIzaSyAhDPEeXP0tVyCWcOeKTFZqZXq9JZhbJvI&v=weekly"
const favoriteHousesKey = "favoriteHouses";

function App({classes}) {
    const [houses, setHouses] = useState({});
    const [favoriteHouses, setFavoriteHouses] = useState({});

    const onHeartClicked = (houseId, isFavorited) => {
        const newFavorites = {
            ...favoriteHouses,
            [houseId]: isFavorited
        }
        setFavoriteHouses(newFavorites);
        localStorage.setItem(favoriteHousesKey, JSON.stringify(newFavorites));
    }

    useEffect(() => {
        getHouses((houses) => setHouses(houses));
    }, [])

    useEffect(() => {
        setFavoriteHouses(JSON.parse(localStorage.getItem(favoriteHousesKey)));
    }, [])

    return (
        <div className="App">
            <BrowserRouter>
                <div style={{width: "100%", height: "100%"}}>
                    <Routes>
                        <Route path="/list" element={<ListView houses={houses} favoriteHouses={favoriteHouses}
                                                               onHeartClicked={onHeartClicked}/>}/>
                        <Route path="/map" element={<MapView houses={houses} googleMapURL={googleMapUrl}
                                                             favoriteHouses={favoriteHouses}
                                                             onHeartClicked={onHeartClicked}
                                                             containerElement={<div className="map-view"/>}
                                                             mapElement={<div style={{height: `100%`}}/>}
                                                             loadingElement={<div style={{height: "100%"}}/>}/>}/>
                        <Route path="/" element={<HomeView/>}/>
                    </Routes>
                </div>

                <div className={classes.bottomNavSpacer}></div>

                <BottomNav/>

            </BrowserRouter>
        </div>
    );
}

export default style(App);
