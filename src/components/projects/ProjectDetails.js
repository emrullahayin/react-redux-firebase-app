import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  }
}));

const ProjectDetails = ({ project }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12}>
      {project ? (
        <Card>
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" component="p">
              {project.content}
            </Typography>
            <Typography variant="overline" component="p" color="textSecondary">
              {project.time}
            </Typography>
          </CardContent>
        </Card>
      ) : (
        <CircularProgress className={classes.progress} color="secondary" />
      )}
    </Grid>
  );
};

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(ProjectDetails);
