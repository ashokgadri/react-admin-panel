import { makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { Page } from "../Page";

const useStyles = makeStyles((theme) => ({
  root: {},
  headerRoot: {
    backgroundColor: theme.palette.white,
  },
  header: {
    height: "100%",
    width: theme.breakpoints.values.md,
    maxWidth: "100%",
    margin: "0 auto",
    padding: "80px 24px",
    [theme.breakpoints.up("md")]: {
      padding: "160px 24px",
    },
  },
}));

function Home() {
  const classes = useStyles();
  return (
    <Page title="Home" className={classes.root}>
      <div className={classes.headerRoot}>
        <div className={classes.header}>
          <Typography variant="h1" align="center" gutterBottom>
            React Admin Panel
          </Typography>
          <Typography variant="subtitle1" component="h2" align="center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </Typography>
        </div>
      </div>
    </Page>
  );
}

export default Home;
