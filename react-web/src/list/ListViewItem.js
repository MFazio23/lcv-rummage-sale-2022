import {Accordion, AccordionDetails, AccordionSummary, Typography} from "@mui/material";
import {ExpandMore} from "@mui/icons-material";
import ListViewDetails from "./ListViewDetails";

function ListViewItem(props) {
    const house = props.house
    return (
        <Accordion key={house.houseId}>
            <AccordionSummary expandIcon={<ExpandMore/>} aria-controls={`house-${house.houseId}-panel`}
                              id={`house-${house.houseId}`}>
                <div className="list-view-header">
                    <Typography variant="h4" className="list-view-house-id">{house.houseId}</Typography>
                    <Typography variant="h5">{house.address}</Typography>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <ListViewDetails house={house} isFavorited={props.isFavorited} heartClicked={props.onHeartClicked} />
            </AccordionDetails>
        </Accordion>
    );
}

export default ListViewItem;