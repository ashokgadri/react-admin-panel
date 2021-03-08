import { makeStyles } from "@material-ui/core";
import React from "react";
import { Fragment } from "react";
import { renderRoutes } from "react-router-config";
import { TopBar } from "./components/TopBar";

const useStyles = makeStyles((theme) => ({
  content: {
    height: "100%",
    paddingTop: 56,
    [theme.breakpoints.up("sm")]: {
      paddingTop: 64,
    },
  },
}));

function Auth(props) {
  const { route } = props;
  const classes = useStyles();
  return (
    <Fragment>
      <TopBar />
      <main className={classes.content}>{renderRoutes(route.routes)}</main>
    </Fragment>
  );
}

export default Auth;
