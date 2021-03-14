import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

function TopBar() {
  return (
    <AppBar color="primary">
      <Toolbar>
        <DashboardOutlinedIcon />
        <Typography
          variant="h5"
          color="inherit"
          style={{ paddingLeft: "10px" }}
        >
          React Admin Panel
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
