import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { NavLinkRouter } from "../config/NavLinkRouter";

const useStyles = makeStyles(theme => ({
  margin: {
    margin: theme.spacing(1)
  }
}));

const SignedOutLinks = () => {
  const classes = useStyles();
  return (
    <div>
      <Button
        color="inherit"
        className={classes.margin}
        to="/signup"
        component={NavLinkRouter}
      >
        Signup
      </Button>
      <Button
        color="inherit"
        variant="outlined"
        to="/signin"
        component={NavLinkRouter}
      >
        Login
      </Button>
    </div>
  );
};

export default SignedOutLinks;
