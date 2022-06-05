import React from "react";
import {Grid, Typography} from "@mui/material";
import OpenTimes from "../shared/OpenTimes";
import Heart from "react-heart";
import PaymentItems from "./PaymentItems";

function ListViewDetails(props) {
    const house = props.house;
    return (
        <Grid container spacing={2}>
            <Grid item container xs={10} spacing={2} justifyContent="space-between" direction="column">
                <Grid item>
                    <Typography variant="body1">{house.blurb}</Typography>
                </Grid>
                <Grid item>
                    <OpenTimes house={house}/>
                </Grid>

            </Grid>
            <Grid item container xs={2} justifyContent="space-between">
                <Grid item xs={10}>
                    <Heart style={{
                        width: "2rem",
                        fill: (props.isFavorited || false) ? '#3573EA' : 'white',
                        color: "green"
                    }}
                           isActive={props.isFavorited || false}
                           onClick={() => props.heartClicked(house.houseId, !props.isFavorited)}/>
                </Grid>
                <Grid item xs={10}>
                    <PaymentItems paymentOptions={house.paymentOptions}/>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default ListViewDetails;