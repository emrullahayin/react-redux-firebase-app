import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";

import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Container } from "@material-ui/core";
import Switch from "@material-ui/core/Switch";

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

const Navbar = () => {
  const classes = useStyles();
  const [auth, setAuth] = useState(true);
  function handleChange(event) {
    setAuth(event.target.checked);
  }

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
            <Switch
              checked={auth}
              onChange={handleChange}
              aria-label="LoginSwitch"
            />
            {auth ? <SignedInLinks /> : <SignedOutLinks />}
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
};

export default Navbar;
