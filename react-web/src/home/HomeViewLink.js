import {Box, Button, Card, CardActions, CardContent, Typography} from "@mui/material";
import {Link} from "react-router-dom";

function HomeViewLink(props) {
    return (
        <Card sx={{minWidth: "200px"}}>
            <CardContent>
                <Typography variant="h5">{props.cardText}</Typography>
                <br/>
                {props.cardIcon}
            </CardContent>
            <CardActions>
                <Box textAlign="center">
                    <Button size="large" component={Link} to={props.buttonLink}>{props.buttonText}</Button>
                </Box>
            </CardActions>
        </Card>
    )
}

export default HomeViewLink;