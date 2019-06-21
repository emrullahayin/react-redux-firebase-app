import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const useStyles = makeStyles(theme => ({
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: "#cfe8fc", height: "100vh" }}
    >
      <Grid item xs={12} sm={6}>
        <ProjectList />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Notifications />
      </Grid>
    </Grid>
  );
};

export default Dashboard;
