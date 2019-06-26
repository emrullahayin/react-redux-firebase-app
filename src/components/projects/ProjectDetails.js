import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ProjectDetails = ({ location }) => {
  const project = location.state.project;
  console.log("TCL: ProjectDetails -> project", project);
  return (
    <Grid item xs={12}>
      <Card>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {project.title}
          </Typography>
          <Typography variant="body2" component="p">
            {project.content}
          </Typography>
          <Typography variant="overline" component="p" color="textSecondary">
            {project.createdAt.seconds}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

export default ProjectDetails;
