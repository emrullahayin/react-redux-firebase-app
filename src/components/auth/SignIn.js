import React from "react";
import { connect } from "react-redux";
import { isEmpty } from "react-redux-firebase";

import { signIn } from "../../store/actions/authActions";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 360,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: 15,
    marginTop: 15
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {},
  alert: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    padding: theme.spacing(2),
    margin: theme.spacing(2, 0),
    backgroundColor: theme.palette.error.dark,
    color: "#FFF",
    boxShadow:
      "0 4px 20px 0 rgba(0, 0, 0,.14), 0 7px 10px -5px rgba(244, 67, 54,.4)"
  }
}));

const SignIn = ({ signIn, auth, authError }) => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    email: "",
    password: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    signIn(values);
  };

  return (
    <React.Fragment>
      {!isEmpty(auth) ? (
        <form
          className={classes.container}
          onSubmit={handleSubmit}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h5" component="h6">
            Sign In
          </Typography>
          <TextField
            value={values.email}
            onChange={handleChange("email")}
            id="login-email-input"
            label="Email"
            className={classes.textField}
            type="email"
            name="email"
            autoComplete="email"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <TextField
            id="login-password-input"
            label="Password"
            className={classes.textField}
            value={values.name}
            onChange={handleChange("password")}
            type="password"
            margin="normal"
            variant="outlined"
            fullWidth
          />
          <Button
            size="large"
            type="submit"
            variant="contained"
            color="primary"
            className={classes.button}
          >
            Login
          </Button>
          {authError && (
            <Paper className={classes.alert} display="none">
              <Typography component="p">Login Failed.</Typography>
            </Paper>
          )}
        </form>
      ) : (
        <CircularProgress />
      )}
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  };
};

const mapDispatchToProps = dispatch => {
  return {
    signIn: creds => dispatch(signIn(creds))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);
