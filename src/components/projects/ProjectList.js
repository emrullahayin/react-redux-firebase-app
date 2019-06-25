import React from "react";
import Grid from "@material-ui/core/Grid";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        {projects &&
          projects.map(project => {
            return <ProjectSummary key={project.id} project={project} />;
          })}
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;
