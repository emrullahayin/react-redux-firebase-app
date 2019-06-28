import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { connect } from "react-redux";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    position: "relative",
    zIndex: 1
  },
  title: {
    flexGrow: 1
  },
  brandLogo: {
    color: "white",
    "&:hover": {
      textDecoration: "none",
      userSelect: "none"
    }
  }
}));

const Navbar = ({ auth }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Container>
          <Toolbar>
            <Typography variant="h6" className={classes.title}>
              <Link to="/" component={RouterLink} className={classes.brandLogo}>
                Firebase App
              </Link>
            </Typography>
            <SignedInLinks />
            <SignedOutLinks />
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    auth: state.firebase.auth
  };
};

export default connect(mapStateToProps)(Navbar);
