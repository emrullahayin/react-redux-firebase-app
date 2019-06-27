import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ProjectDetails = ({ location }) => {
  return (
    <Grid item xs={12}>
      {location.state !== undefined && (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {location.state.project.title}
            </Typography>
            <Typography variant="body2" component="p">
              {location.state.project.content}
            </Typography>
            <Typography variant="overline" component="p" color="textSecondary">
              {location.state.project.time}
            </Typography>
          </CardContent>
        </Card>
      )}
    </Grid>
  );
};

export default ProjectDetails;
