import HomeViewLink from "./HomeViewLink";
import {FileDownload, FormatListBulleted, Map} from "@mui/icons-material";
import {Grid} from "@mui/material";

function HomeView() {
    return (
        <div>
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
                <Grid container spacing={2} justifyContent="center">
                    <Grid item xs={10} md={4}>
                        <HomeViewLink cardText="List View" buttonText="View" buttonLink="/list"
                                      cardIcon={<FormatListBulleted fontSize="large"/>}/>
                    </Grid>
                    <Grid item xs={10} md={4}>
                        <HomeViewLink cardText="Download PDF" buttonText="Download" buttonLink="/"
                                      cardIcon={<FileDownload fontSize="large"/>}/>
                    </Grid>
                    <Grid item xs={10} md={4}>
                        <HomeViewLink cardText="Map View" buttonText="View" buttonLink="/map"
                                      cardIcon={<Map fontSize="large"/>}/>
                    </Grid>
                </Grid>
            </div>

            {/*<div className="home-links">
                <Link to="/list">List</Link>
                <Link to="/">PDF</Link>
                <Link to="/map">Map</Link>
            </div>*/}
        </div>
    );
}

export default HomeView;
