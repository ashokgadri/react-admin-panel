import { makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import { connect } from "react-redux";
import { renderRoutes } from "react-router-config";
import { NavBar } from "./components/NavBar";
import { TopBar } from "./components/TopBar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    overflow: "hidden",
  },
  topBar: {
    zIndex: 2,
    position: "relative",
  },
  container: {
    display: "flex",
    flex: "1 1 auto",
    overflow: "hidden",
  },
  navBar: {
    zIndex: 3,
    width: 256,
    minWidth: 256,
    flex: "0 0 auto",
  },
  content: {
    overflowY: "auto",
    flex: "1 1 auto",
  },
}));

function Dashboard(props) {
  const { route, isAuthenticated } = props;
  const classes = useStyles();
  const [openNavBarMobile, setOpenNavBarMobile] = useState(false);

  const handleMenuClick = () => {
      setOpenNavBarMobile(true);
  }
  const handleMenuCloseClick = () => {
      setOpenNavBarMobile(false);
  }

  return (
    <div className={classes.root}>
      <TopBar className={classes.topBar} openMenu = {handleMenuClick} />
      <div className={classes.container}>
        <NavBar className={classes.navBar} closeMenu = {handleMenuCloseClick} openMenu = {openNavBarMobile} />
        <main className={classes.content}>
          {renderRoutes(route.routes, { isAuthenticated: isAuthenticated })}
        </main>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    isAuthenticated: state.auth.loggedIn,
  };
};

export default connect(mapStateToProps)(Dashboard);
