import React from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: theme.spacing(2)
  }
}));

const ProjectSummary = ({ project }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {project.title}
        </Typography>
        <Typography variant="body2" component="p">
          {project.content}
        </Typography>
        <Typography variant="overline" component="p" color="textSecondary">
          {moment.unix(project.createdAt.seconds).format("llll")}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="small"
          color="primary"
          to={{
            pathname: `/project/${project.id}`,
            state: {
              project: {
                title: project.title,
                content: project.content,
                time: moment.unix(project.createdAt.seconds).format("llll")
              }
            }
          }}
          component={Link}
        >
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProjectSummary;
