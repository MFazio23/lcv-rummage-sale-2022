import React from "react";
import HomeViewLink from "./HomeViewLink";
import {FileDownload, FormatListBulleted, Map} from "@mui/icons-material";
import {Stack} from "@mui/material";

function HomeView(props) {
    const pdfLink = "https://faziostaticsitestorage.file.core.windows.net/lcv-rummage-sale/Rummage flyer final.pdf?sp=r&st=2022-07-06T04:08:12Z&se=2024-07-07T04:08:00Z&spr=https&sv=2021-06-08&sig=0EvbYKwtS4efZHbGr8CJ80Ak8iEmlDYOZXYxzW%2FeC8Y%3D&sr=f";

    return (
        <div style={{padding: '8px'}}>
            <h1>Lake Country Village Rummage Sale '22</h1>
            <p>
            Welcome to Lake Country Village! Click below to download a PDF of the map and listing, or use the handy-dandy interactive maps and list features. Happy Rummaging!
            </p>

            <div>
                <Stack direction={{xs: "column", "sm": "row"}} spacing={{xs: 2, sm: 2, md: 4}} justifyContent="space-evenly">
                    <HomeViewLink cardText="List View" buttonText="View" buttonLink="/list"
                                  cardIcon={<FormatListBulleted fontSize="large"/>}/>
                    <HomeViewLink cardText="Download PDF" buttonText="Download" buttonUrl={pdfLink}
                                  cardIcon={<FileDownload fontSize="large"/>}/>
                    <HomeViewLink cardText="Map View" buttonText="View" buttonLink="/map"
                                  cardIcon={<Map fontSize="large"/>}/>
                </Stack>
            </div>

            <div className={props.classes.bottomNavSpacer}></div>
        </div>
    );
}

export default HomeView;
