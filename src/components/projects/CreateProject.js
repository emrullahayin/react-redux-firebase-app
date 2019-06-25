import React from "react";
import { connect } from "react-redux";
import { createProject } from "../../store/actions/projectActions";

import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    maxWidth: 360,
    margin: "auto",
    backgroundColor: theme.palette.background.paper,
    padding: 15,
    marginTop: 15
  },
  button: {
    margin: theme.spacing(1)
  },
  textField: {}
}));

const CreateProject = () => {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    title: "",
    content: ""
  });

  const handleChange = name => event => {
    setValues({ ...values, [name]: event.target.value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    createProject(values);
  };

  return (
    <form
      className={classes.container}
      onSubmit={handleSubmit}
      noValidate
      autoComplete="off"
    >
      <Typography variant="h5" component="h6">
        Create Project
      </Typography>
      <TextField
        id="title-input"
        label="Title"
        className={classes.textField}
        value={values.title}
        onChange={handleChange("title")}
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
      />
      <TextField
        id="content-input"
        label="Content"
        className={classes.textField}
        value={values.content}
        onChange={handleChange("content")}
        type="text"
        margin="normal"
        variant="outlined"
        fullWidth
        placeholder=""
        multiline={true}
        rows={2}
        rowsMax={4}
      />
      <Button
        size="large"
        type="submit"
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Create
      </Button>
    </form>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    createProject: project => dispatch(createProject(project))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(CreateProject);
