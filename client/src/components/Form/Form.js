import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import FileBase from "react-file-base64";
import { useDispatch, useSelector } from "react-redux";
import { TextField, Button, Typography, Paper, StepConnector } from "@material-ui/core";
import useStyles from "./styles";
import { createPost, updatePost } from "../../actions/posts";
const Form = ({currentId,setCurrentId}) => {
  const dispatch = useDispatch();
  const post = useSelector(state=>currentId ? state.posts.find((p)=>p._id===currentId):null)
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

  useEffect(() => {
    if(post) setPostData(post)
    
  }, [post])
  const handleSubmit = (e) => {
    e.preventDefault();
    if(currentId){
      dispatch(updatePost(currentId,postData))
    }else{
      dispatch(createPost(postData));
    }
    clear()
  }

  const clear = ()=>{
    setCurrentId(null)
    setPostData({
      creator: "",
      title: "",
      message: "",
      tags: "",
      selectedFile: "",
    })
  }
  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={`${classes.root} ${classes.form}`}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">{currentId ? "Update" : "Create"} a Memory</Typography>
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          className={classes.input}
          fullWidth
          value={postData.creator}
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          className={classes.input}
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          className={classes.input}
          multiline
          rows={4}
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />
        <TextField
          name="tags"
          variant="outlined"
          className={classes.input}
          label="Tags (coma separated)"
          fullWidth
          value={postData.tags}
          onChange={(e) =>
            setPostData({ ...postData, tags: e.target.value.split(",") })
          }
        />
        <div className={classes.fileInput}>
          <FileBase
            type="file"
            className={classes.input}
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

Form.propTypes = {};

export default Form;
