import { useEffect } from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import memories from "../src/images/memories.png";
import { getPosts } from "./actions/posts";
import Posts from "./components/Posts/Posts";
import Form from "./components/Form/Form.js";
import useStyle from "./styles";

const App = (props) => {
  const classes = useStyle();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">
          Memories
        </Typography>
        <img
          className={classes.image}
          src={memories}
          alt="memories"
          height="60"
        />
      </AppBar>
      <Grow in>
        <Container>
          <Grid container alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts />
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form />
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
};

App.propTypes = {};

export default App;