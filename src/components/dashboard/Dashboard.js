import React from "react";
import Grid from "@material-ui/core/Grid";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const Dashboard = () => {
  return (
    <Grid
      container
      spacing={3}
      style={{ backgroundColor: "#cfe8fc", minHeight: "100vh" }}
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
