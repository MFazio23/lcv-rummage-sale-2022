import React from "react";
import HomeViewLink from "./HomeViewLink";
import {FileDownload, FormatListBulleted, Map} from "@mui/icons-material";
import {Stack} from "@mui/material";
import GA from "../shared/GA";

function HomeView(props) {
    GA.usePageTracking();

    const pdfLink = "https://faziostaticsitestorage.file.core.windows.net/lcv-rummage-sale/lcv-rummage-flyer.pdf?sv=2021-04-10&st=2022-07-11T02%3A34%3A26Z&se=2032-07-12T02%3A34%3A00Z&sr=f&sp=r&sig=1GH%2BadIvJQGRX7hsCrEDNqI%2FxSrkqz0L0nZvyeh%2F0BE%3D"
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
