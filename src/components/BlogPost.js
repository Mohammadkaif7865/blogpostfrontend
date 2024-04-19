// src/components/BlogPost.js
import React, { useEffect, useState } from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { Typography, Paper, Button, CardMedia } from '@mui/material';
import moment from 'moment';
function BlogPost() {
    const { postId } = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://amazondeploy2vercel.vercel.app/blog/${postId}`)
            .then(response => response.json())
            .then(data => setPost(data))
            .catch(error => console.error('Error fetching post:', error));
    }, [postId]);

    if (!post) return <div>Loading...</div>;

    return (
        <Paper style={{ padding: 20, margin: 20 }}>
            {post.imageUrl && (
                <CardMedia
                    component="img"
                    height="300"
                    image={post.imageUrl}
                    alt={post.title}
                />
            )}
            <Typography variant="h4" gutterBottom>
                {post.title}
            </Typography>
            <Typography variant="body1" paragraph>
                {post.content}
            </Typography>
            <Typography variant="caption" display="block" gutterBottom>
            Published: {`${moment(post.date).format('MMMM d, yyyy')} ${moment(post.date).format('h:mm A')}`}
            </Typography>
            <Button variant="outlined" component={RouterLink} to="/">
                Back to Posts
            </Button>
        </Paper>
    );
}

export default BlogPost;
