import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card, CardHeader, CardContent, CardActions, IconButton, Typography,
} from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 345,
  },
  avatar: {
    backgroundColor: red[500],
  },
}));

export const PostCard = ({
  id,
  title,
  body,
  clickable,
}) => {
  const history = useHistory();
  const classes = useStyles();

  const handleClick = () => {
    if (clickable) {
      history.push(`/post/${id}`);
    }
  };

  return (
    <Card key={id} className={classes.root} onClick={handleClick}>
      <CardHeader
        title={title}
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {body}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default PostCard;
