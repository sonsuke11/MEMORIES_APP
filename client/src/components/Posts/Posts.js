import React from "react";
import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";
import Post from "./Post/Post";
import useStyles from "./styles";
const Posts = (props) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);
  console.log(posts);
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid className={classes.container} alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid item key={post._id} xs={12}>
              <Post post={post} />
            </Grid>
          ))}
        </Grid>
      )}
    </>
  );
};

Posts.propTypes = {};

export default Posts;
