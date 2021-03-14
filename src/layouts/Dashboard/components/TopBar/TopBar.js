import {
  AppBar,
  Button,
  Hidden,
  IconButton,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@material-ui/core";
import clsx from "clsx";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { useSelector } from "react-redux";

const useStyles = makeStyles({
  root: {
    boxShadow: "none",
  },
  flexGrow: {
    flexGrow: 1,
  },
});

function TopBar(props) {
  const { className, openMenu, ...rest } = props;
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClose = () => {
      setAnchorEl(null);
  };
  const handleMenuOpen = (event) => {
      setAnchorEl(event.currentTarget);
  };

  const auth = useSelector(state => state.auth)

  return (
    <AppBar {...rest} className={clsx(classes.root, className)} color="primary">
      <Toolbar>
        <DashboardOutlinedIcon />
        <Typography variant="h5" color="inherit" style={{paddingLeft: '10px'}}>React Admin Panel</Typography>
        <div className={classes.flexGrow} />
        <Button color="inherit" variant="outlined" onClick={handleMenuOpen}>
          {auth.user && `${auth.user.name}`}
        </Button>
        <Menu open={Boolean(anchorEl)} onClose={handleMenuClose} anchorEl={anchorEl}>
          <MenuItem>Profile</MenuItem>
          <MenuItem>My Account</MenuItem>
          <MenuItem><Link to="/auth/login"> Logout</Link></MenuItem>
        </Menu>
        <Hidden lgUp>
          <IconButton color="inherit" onClick={openMenu}>
            <MenuIcon />
          </IconButton>
        </Hidden>
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
