import React from "react";
import Grid from "@material-ui/core/Grid";

import ProjectSummary from "./ProjectSummary";

const ProjectList = ({ projects }) => {
  return (
    <React.Fragment>
      <Grid item xs={12}>
        {projects.map((project, i) => {
          return (
            <ProjectSummary
              key={i}
              title={project.title}
              content={project.content}
            />
          );
        })}
      </Grid>
    </React.Fragment>
  );
};

export default ProjectList;
