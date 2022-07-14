import {useLocation} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactGA from "react-ga4";

const GA = {
    usePageTracking: () => {
        const location = useLocation();
        const [isInitialized, setIsInitialized] = useState(false);

        useEffect(() => {
            ReactGA.initialize("G-83JTZS1WH3", {debug: true});
            setIsInitialized(true);
        }, []);

        useEffect(() => {
            if (isInitialized) {
                ReactGA.send({hitType: "pageview", page: location.pathname});
            }
        })
    },
    trackFavorite: (houseId, isFavorited, location) => {
        ReactGA.event({
            category: "favorites",
            action: isFavorited ? "favorite" : "unfavorite",
            label: houseId,
        })
    },
    trackMarkerClick: () => {

    },
    trackListExpand: () => {

    }
}

export default GA;