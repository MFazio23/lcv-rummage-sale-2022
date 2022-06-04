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

function App({classes}) {
    const [houses, setHouses] = useState({});
    const [favoriteHouses, setFavoriteHouses] = useState({});

    const onHeartClicked = (houseId, isFavorited) => {
        setFavoriteHouses(
            {
                ...favoriteHouses,
                [houseId]: isFavorited
            }
        )
    }

    useEffect(() => {
        getHouses((houses) => setHouses(houses));
    }, [])

    useEffect(() => {
        localStorage.setItem("favoriteHouses", JSON.stringify(favoriteHouses))
    });

    return (
        <div className="App">
            <BrowserRouter>
                <div>
                    <Routes>
                        <Route path="/list" element={<ListView houses={houses} favoriteHouses={favoriteHouses}
                                                               onHeartClicked={onHeartClicked}/>}/>
                        <Route path="/map" element={<MapView houses={houses}/>}/>
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
