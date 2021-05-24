import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';

import {likePost, deletePost} from '../../../actions/posts';
import useStyles from './styles';

const Post = ({ post, setCurrentId }) => {
  const dispatch = useDispatch();
  const classes = useStyles();

  return (
    <div className="card">
      <CardMedia className={classes.media} image={post.selectedFile || 'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'} title={post.title} />
      <div className={classes.overlay}>
        <h4>{post.creator}</h4>
        {/* <Typography variant="h6">{post.creator}</Typography> */}
        <p>{moment(post.createdAt).fromNow()}</p>
        {/* <Typography variant="body2">{moment(post.createdAt).fromNow()}</Typography> */}
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(post._id)}><MoreHorizIcon fontSize="default" /></Button>
      </div>
      <div className={classes.details}>
        <h6>{post.tags.map((tag) => `#${tag} `)}</h6>
      </div>
      <h5 className={classes.title}>{post.title}</h5>
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <button className = "likes" onClick={() => dispatch(likePost(post._id))}><ThumbUpAltIcon  /></button>
        <span >{post.likeCount}</span>
        <button className = "delete" onClick={() => dispatch(deletePost(post._id))}><DeleteIcon /></button>
      </CardActions>
    </div>
  );
};

export default Post;
