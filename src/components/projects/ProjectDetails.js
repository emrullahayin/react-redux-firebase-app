import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles(theme => ({
  progress: {
    margin: theme.spacing(2)
  },
  grid: {
    textAlign: "center"
  },
  card: {
    textAlign: "left"
  },
  divider: {
    margin: theme.spacing(2, 0)
  }
}));

const ProjectDetails = ({ project }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.grid}>
      {project ? (
        <Card className={classes.card}>
          <CardContent divider>
            <Typography gutterBottom variant="h5" component="h2">
              {project.title}
            </Typography>
            <Typography variant="body2" component="p">
              {project.content}
            </Typography>
            <Divider className={classes.divider} />
            <Typography variant="overline" component="p" color="textSecondary">
              {moment.unix(project.createdAt.seconds).format("llll")}
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
