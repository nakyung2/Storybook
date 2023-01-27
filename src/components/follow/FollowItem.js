import React from "react";
import MenuItem from '@mui/material/MenuItem';

const FollowItem = ({name}) => {
    return (
        // <MenuItem value=""><em>None</em></MenuItem>
        <MenuItem value="">{name}</MenuItem>
    );
}

export default FollowItem;