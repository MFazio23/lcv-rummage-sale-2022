import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import MapView from "../map/MapView";
import HomeView from "../home/HomeView";
import ListView from "../list/ListView";
import BottomNav from "./BottomNav";

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/list" element={<ListView/>}/>
                    <Route path="/map" element={<MapView/>}/>
                    <Route path="/" element={<HomeView/>}/>
                </Routes>

                <BottomNav/>

            </BrowserRouter>
        </div>
    );
}

export default App;
