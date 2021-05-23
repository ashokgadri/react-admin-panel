import { Card, CardContent, makeStyles, Typography } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React from "react";
import { useSelector } from "react-redux";
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
  alert: {
    marginTop: theme.spacing(2),
  },
}));

function Login() {
  const classes = useStyles();

  const auth = useSelector((state) => state.auth);

  return (
    <Page title="Login" className={classes.root}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h3">
            Log In
          </Typography>
          {auth.error && (
            <Alert severity="error" className={classes.alert}>
              {auth.error.message || auth.error}
            </Alert>
          )}

          <LoginForm className={classes.loginForm} />
          <Typography gutterBottom variant="p">
            Username: test@gmail.com<br></br>
            Password: Pass$%^789
          </Typography>
        </CardContent>
      </Card>
    </Page>
  );
}

export default Login;
