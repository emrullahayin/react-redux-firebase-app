import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const ProjectDetails = props => {
  const id = props.match.params.id;
  return (
    <Card>
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          Lizard {id}
        </Typography>
        <Typography variant="body2" component="p">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
        <Typography variant="overline" component="p" color="textSecondary">
          September 14, 2016
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectDetails;
