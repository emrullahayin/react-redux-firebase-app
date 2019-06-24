import React from "react";
import Grid from "@material-ui/core/Grid";

import ProjectSummary from "./ProjectSummary";

const ProjectList = () => {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
        <ProjectSummary />
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;
