import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import SignedOutLinks from "./SignedOutLinks";
import SignedInLinks from "./SignedInLinks";
import { Container } from "@material-ui/core";

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

const Navbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
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
            {!auth ? <SignedInLinks /> : <SignedOutLinks />}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
