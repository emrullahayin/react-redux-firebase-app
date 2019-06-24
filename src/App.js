import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";

import Navbar from "./components/layout/Navbar";
import Dashboard from "./components/dashboard/Dashboard";
import ProjectDetails from "./components/projects/ProjectDetails";

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
          <Switch>
            <Route exact path="/" component={Dashboard} />
            <Route path="/project/:id" component={ProjectDetails} />
          </Switch>
        </Container>
      </div>
    </Router>
  );
}
