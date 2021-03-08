import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import { LoginForm } from "../LoginForm";
import { Page } from "../Page";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: theme.spacing(6, 2),
  },
  loginForm: {
    marginTop: theme.spacing(3),
  },
}));

function Login() {
  const classes = useStyles();
  return (
    <Page title="Login" className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h3">
            Log In
          </Typography>
          <LoginForm className={classes.loginForm} />
        </CardContent>
      </Card>
    </Page>
  );
}

export default Login;
