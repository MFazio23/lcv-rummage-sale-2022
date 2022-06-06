import React from "react";
import HomeViewLink from "./HomeViewLink";
import {FileDownload, FormatListBulleted, Map} from "@mui/icons-material";
import {Stack} from "@mui/material";

function HomeView() {
    const pdfLink = "https://faziostaticsitestorage.file.core.windows.net/lcv-rummage-sale/LCV%20Rummage%20Sale.pdf?sv=2021-04-10&st=2022-05-30T17%3A27%3A39Z&se=2055-05-31T17%3A27%3A00Z&sr=f&sp=r&sig=P9JQfF7CLi4UJyFgvleT2xJTQGCDYmos26Enndx6UDA%3D";

    return (
        <div style={{padding: '8px'}}>
            <h1>Lake Country Village Rummage Sale '22</h1>
            <p>
                cabin Roundabouts Where-Abouts meat raffle Da lake Where-Abouts For cripes sakes cabin Fish Fry
                Roundabouts Fish Fry Believe You Me squeaky
                cheese curds Cringle
            </p>
            <p>
                Bratfest Spotted Cow practice beers Believe You Me Where-Abouts no, yeah Brandy Old Fashioned Packers
                yeah, no Da lake Spotted Cow Summerfest Aw
                Geez Fish Fry Bratfest Liney Red Stop-and-go-lights Where-Abouts Culvers practice beers north of 8
                Cringle
            </p>
            <p>
                cabin practice beers Da lake squeaky cheese curds Fleet Farm Stop-and-go-lights Believe You Me Da lake
                Aw Geez practice beers Uff-Da For cripes
                sakes Cheesehead Ope Ya Know? Piggly Wiggly Ya Know? Stop-and-go-lights Fish Fry Aw Geez Fleet Farm
                Summerfest Bubbler Ope
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
        </div>
    );
}

export default HomeView;
