import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import ListViewDetails from "./ListViewDetails";
import Heart from "react-heart";

function ListViewItem(props) {
    const house = props.house

    return (
        <Accordion key={house.houseId}>
            <AccordionSummary expandIcon={<ExpandMore/>} aria-controls={`house-${house.houseId}-panel`}
                              id={`house-${house.houseId}`}>
                <div className="list-view-item-header">
                    <div className="list-view-item-header-text">
                        <Typography variant="h4" className="list-view-house-id">{house.houseId}</Typography>
                        <Typography variant="h5" style={{textAlign: 'left'}}>{house.address}</Typography>
                    </div>
                    <div onClick={e => e.stopPropagation()}>
                        <Heart
                            style={{
                                width: "2em",
                                fill: (props.isFavorited || false) ? '#3573EA' : 'white',
                                float: "right"
                            }}
                            isActive={props.isFavorited || false}
                            onClick={() => props.onHeartClicked(house.houseId, !props.isFavorited)}
                        />
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <ListViewDetails house={house}/>
            </AccordionDetails>
        </Accordion>
    );
}

export default ListViewItem;