import React from "react";
import Grid from "@material-ui/core/Grid";
import CircularProgress from "@material-ui/core/CircularProgress";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      <Grid item xs={12} style={{ textAlign: "center" }}>
        {projects ? (
          projects.map(project => {
            return <ProjectSummary key={project.id} project={project} />;
          })
        ) : (
          <CircularProgress />
        )}
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;
