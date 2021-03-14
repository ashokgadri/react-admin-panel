import { Button, makeStyles, TextField } from "@material-ui/core";
import clsx from "clsx";
import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import validate from "validate.js";
import { authActions } from "../../actions";

const constraints = {
  email: {
    presence: { allowEmpty: false, message: "is required!" },
    email: true,
  },
  password: {
    presence: { allowEmpty: false, message: "is required!" },
  },
};

const useStyles = makeStyles((theme) => ({
  root: {},
  fields: {
    margin: theme.spacing(-1),
    display: "flex",
    flexWrap: "wrap",
    "& > *": {
      flexGrow: 1,
      margin: theme.spacing(1),
    },
  },
  submitButton: {
    marginTop: theme.spacing(2),
    width: "100%",
  },
}));

function LoginForm(props) {
  const { login, logout, className, ...rest } = props;

  const classes = useStyles();

  const [formState, setFormState] = useState({
    isValid: false,
    values: {},
    touched: {},
    errors: {},
  });

  useEffect(() => {
    //logout();
  }, []);
  useEffect(() => {
    const errors = validate(formState.values, constraints);
    setFormState((formState) => ({
      ...formState,
      isValid: errors ? false : true,
      errors: errors || {},
    }));
  }, [formState.values]);

  const handleChange = (event) => {
    setFormState((formState) => ({
      ...formState,
      values: {
        ...formState.values,
        [event.target.name]: event.target.value,
      },
      touched: {
        ...formState.touched,
        [event.target.name]: true,
      },
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(formState.values.email, formState.values.password);
  };

  const hasError = (field) =>
    formState.touched[field] && formState.errors[field] ? true : false;

  return (
    <form
      {...rest}
      className={clsx(classes.root, className)}
      onSubmit={handleSubmit}
    >
      <div className={classes.fields}>
        <TextField
          fullWidth
          variant="outlined"
          label="Email Address"
          name="email"
          value={formState.values.email || ""}
          onChange={handleChange}
          error={hasError("email")}
          helperText={hasError("email") ? formState.errors.email[0] : null}
        />
        <TextField
          fullWidth
          type="password"
          variant="outlined"
          label="Password"
          name="password"
          value={formState.values.password || ""}
          onChange={handleChange}
          error={hasError("password")}
          helperText={
            hasError("password") ? formState.errors.password[0] : null
          }
        />
      </div>
      <Button
        variant="contained"
        type="submit"
        color="secondary"
        size="large"
        disabled={!formState.isValid}
        className={classes.submitButton}
      >
        Log In
      </Button>
    </form>
  );
}

const mapStateToProps = null;
const mapDispatchToProps = {
  login: authActions.login,
  logout: authActions.logout,
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
