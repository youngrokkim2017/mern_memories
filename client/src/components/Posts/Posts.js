import React from 'react';
import Post from './Post/Post';

import useStyles from './styles';

const Posts = () => {
    const classes = useStyles();
    
    return (
        <>
            <h1>Posts Page</h1>
            <Post />
        </>
    )
}

export default Posts;