import ListViewItem from "./ListViewItem";

function ListView(props) {
    const houses = Object.values(props.houses).sort((a, b) => a.houseId - b.houseId);
    return (
        <div>
            {houses.map(house => {
                const isFavorited = props.favoriteHouses[house.houseId];
                return <ListViewItem key={house.houseId} house={house} isFavorited={isFavorited}
                                     onHeartClicked={props.onHeartClicked}/>
            })}
        </div>
    );
}

export default ListView;
