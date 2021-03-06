import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import CreateProject from "./components/projects/CreateProject";

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: theme.spacing(1)
  }
}));

export default function App() {
  const classes = useStyles();

  return (
    <Router>
      <CssBaseline />
      <div className="App">
        <Navbar />
        <Container className={classes.container}>
          <Grid container spacing={3} style={{ minHeight: "100vh" }}>
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/project/:id" component={ProjectDetails} />
              <Route path="/signin" component={SignIn} />
              <Route path="/signup" component={SignUp} />
              <Route path="/create" component={CreateProject} />
            </Switch>
          </Grid>
        </Container>
      </div>
    </Router>
  );
}
