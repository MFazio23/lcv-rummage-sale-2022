import React from "react";
import ListViewItem from "./ListViewItem";
import ListViewHeader from "./ListViewHeader";
import {useState} from "react";
import GA from "../shared/GA";

const favoritesOnlyKey = "favoritesOnly";

function ListView(props) {
    const [searchTerm, setSearchTerm] = useState(null);
    const [favoritesOnly, setFavoritesOnly] = useState(
        localStorage.getItem(favoritesOnlyKey) === 'true'
    );

    GA.usePageTracking();

    const onSwitchToggle = (e, isEnabled) => {
        setFavoritesOnly(isEnabled);
        localStorage.setItem(favoritesOnlyKey, isEnabled);
    }

    const houses = Object.values(props.houses)
        .sort((a, b) => a.houseId - b.houseId)
        .filter(house => favoritesOnly ? props.favoriteHouses[house.houseId] : true)
        .filter(house => !searchTerm || house.blurb.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0);

    return (
        <div className="list-view">
            <ListViewHeader onSwitchToggle={onSwitchToggle} isChecked={favoritesOnly}
                            onSearch={(term) => setSearchTerm(term)}/>
            {houses.map(house => {
                const isFavorited = props.favoriteHouses && props.favoriteHouses[house.houseId];
                return <ListViewItem key={house.houseId} house={house} isFavorited={isFavorited}
                                     onHeartClicked={props.onHeartClicked}/>
            })}

            <div className={props.classes.bottomNavSpacer}></div>
        </div>
    );
}

export default ListView;
