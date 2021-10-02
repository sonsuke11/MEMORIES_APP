import React from "react";
import PropTypes from "prop-types";

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from "@material-ui/core";
import {useDispatch} from "react-redux"
import DeleteIcon from "@material-ui/icons/Delete";
import moment from "moment";
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import useStyles from "./styles";
import { deletePost ,likePost} from "../../../actions/posts";

const Post = ({ post,setCurrentId }) => {
  const classes = useStyles();
  const dispatch = useDispatch()
  return (
    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={post.selectedFile}
        file={post.title}
      />
      <div className={classes.overlay}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">
          {moment(post.creatAt).startOf('hour').fromNow()}
        </Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {setCurrentId(post._id)}}>
          <MoreHorizIcon fontSize="detault" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          #{post.tags.map((tag) => `${tag}`).join(",")}
        </Typography>
      </div>
        <Typography
          variant="h5"
          className={classes.title}
        >
          {post.title}
        </Typography>
      <CardContent>
        <Typography
          variant="body2"
          color="textSecondary"
          gutterBottom
          component = "p"
        >
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {dispatch(likePost(post._id))}}>
          <ThumbUpAltIcon fontSize="small" />
          &nbsp;
          Like
          &nbsp;
          {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={()=>{dispatch(deletePost(post._id))}}>
          <DeleteIcon fontSize="small" />
          Delete
        </Button>
      </CardActions>
    </Card>
  );
};

Post.propTypes = {};

export default Post;
