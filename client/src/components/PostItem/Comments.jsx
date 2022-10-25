import React, { useState, useRef } from 'react';
import { Typography, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';

import useStyles from './styles';
import { commentPost } from '../../actions/posts';

const Comments = ({ post }) => {
    const classes = useStyles();
    const [comments, setComments] = useState([]);
    const [comment, setComment] = useState('');
    const user = JSON.parse(localStorage.getItem('user'));
    const dispatch = useDispatch();

    const handleClick = () => {
        const finalComment = `${user.result.name}: ${comment}`;

        dispatch(commentPost(finalComment, post._id));
    }

    return (
        <div>
            <div className={classes.commentsOuterContainer}>
                <div className={classes.commentsInnerContainer}>
                    <Typography variant='h6' gutterBottom>
                        Comments
                    </Typography>
                    {comments.map((comment, i) => (
                        <Typography key={i} gutterBottom variant="subtitle1">
                            test comment {i}
                        </Typography>
                    ))}
                </div>
                <div style={{ width: '70%' }}>
                    <Typography variant='h6' gutterBottom>
                        Write a Comment
                    </Typography>
                    <TextField 
                        fullWidth
                        rows={4}
                        variant='outlined'
                        label='Comment'
                        multiline
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <Button
                        style={{ marginTop: '10px' }}
                        fullWidth
                        disabled={!comment}
                        variant='contained'
                        color='primary'
                        onClick={handleClick}
                    >
                        Comment
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Comments; 