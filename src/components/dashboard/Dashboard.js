import React from "react";
import Grid from "@material-ui/core/Grid";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const Dashboard = () => {
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <ProjectList />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Notifications />
      </Grid>
    </React.Fragment>
  );
};

export default Dashboard;
