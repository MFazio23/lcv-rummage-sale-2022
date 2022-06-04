import React from "react";
import {Grid, Typography} from "@mui/material";
import OpenTimes from "../shared/OpenTimes";
import Heart from "react-heart";

function ListViewDetails(props) {
    const house = props.house;
    return (
        <Grid container spacing={2}>
            <Grid item container xs={10}>
                <Grid container spacing={2} alignItems="spaceBetween" direction="column">
                    <Grid item>
                        <Typography variant="body1">{house.blurb}</Typography>
                    </Grid>
                    <Grid item>
                        <OpenTimes house={house}/>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item container xs={2}>
                <Grid container spacing={2}>
                    <Grid item xs={10}>
                        <Heart style={{width: "2rem", fill: (props.isFavorited || false) ? '#3573EA' : 'white'}}
                               isActive={props.isFavorited || false}
                               onClick={() => props.heartClicked(house.houseId, !props.isFavorited)}/>
                    </Grid>
                    <Grid item xs={10}>
                        <Typography variant="body1">{house.blurb}</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ListViewDetails;