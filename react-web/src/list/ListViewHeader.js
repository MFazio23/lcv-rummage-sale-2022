import {FormControlLabel, FormGroup, Switch, TextField} from "@mui/material";

const ListViewHeader = (props) => (
    <div className="list-view-header" style={{display: "flex", flexDirection: "column"}}>
        <div className="list-view-header-top">
            <h3>House List</h3>
            <FormGroup>
                <FormControlLabel control={<Switch checked={props.isChecked} onChange={props.onSwitchToggle}
                                                   inputProps={{'aria-label': 'controlled'}}/>} label="Favorites only"/>
            </FormGroup>
        </div>
        <div style={{display: "flex"}}>
            <TextField id="outlined-search" label="Search field" type="search" size="small"
                       onChange={(e) => props.onSearch(e.target.value)}/>
        </div>
    </div>
);

export default ListViewHeader;