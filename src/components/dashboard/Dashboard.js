import React from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";

import Grid from "@material-ui/core/Grid";
import Notifications from "./Notifications";
import ProjectList from "../projects/ProjectList";

const Dashboard = props => {
  const { projects } = props;
  return (
    <React.Fragment>
      <Grid item xs={12} sm={6}>
        <ProjectList projects={projects} />
      </Grid>
      <Grid item xs={12} sm={6}>
        <Notifications />
      </Grid>
    </React.Fragment>
  );
};

const mapStateToProps = state => {
  return {
    projects: state.firestore.ordered.projects
  };
};

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {
      collection: "projects"
    }
  ])
)(Dashboard);
