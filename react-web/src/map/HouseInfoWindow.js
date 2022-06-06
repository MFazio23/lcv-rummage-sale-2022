import {Grid, Typography} from "@mui/material";
import OpenTimes from "../shared/OpenTimes";
import PaymentItems from "../list/PaymentItems";
import React from "react";
import Heart from "react-heart";

const HouseInfoWindow = (props) => {
    const house = props.house;

    return (
        <Grid container spacing={2} direction="row">

            <Grid item container xs={2} justifyContent="center" direction="column">
                <Grid item>
                    <Typography variant="h5" color="#3573EA">{house.houseId}</Typography>
                </Grid>
                <Grid item>
                    <Heart
                        style={{
                            width: "2em",
                            fill: (props.isFavorited || false) ? '#3573EA' : 'white',
                        }}
                        isActive={props.isFavorited || false}
                        onClick={() => props.onHeartClicked(house.houseId, !props.isFavorited)}
                    />
                </Grid>
            </Grid>

            <Grid item container xs={8} rowSpacing={{xs: 1, sm: 2, md: 3}} direction="column">
                <Grid item>
                    <Typography variant="h5">{house.address}</Typography>
                </Grid>
                <Grid item>
                    <Typography variant="body1">{house.blurb}</Typography>
                </Grid>
                <Grid item>
                    <OpenTimes house={house}/>
                </Grid>

            </Grid>
            <Grid item container xs={2} justifyContent="space-between">
                <Grid item>
                    <PaymentItems paymentOptions={house.paymentOptions}/>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default HouseInfoWindow;