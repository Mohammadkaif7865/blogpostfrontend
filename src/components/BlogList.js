// src/components/BlogList.js
import React, { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Card, CardContent, Typography, Link, CardMedia, Grid } from '@mui/material';
import moment from 'moment';
import BlogHeader from './BlogHeader';
function BlogList() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:9100/blogs')
            .then(response => response.json())
            .then(data => setPosts(data))
            .catch(error => console.error('Error fetching posts:', error));
    }, []);

    return (
        <div >
           <BlogHeader/>
            <Grid container spacing={2}>
                {posts.map((post, id) => (
                    <Grid item xs={12} sm={6} md={4} lg={4} key={id}>
                        <Card style={{ marginBottom: 20 }}>
                            {post.imageUrl && (
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={post.imageUrl}
                                    alt={post.title}
                                />
                            )}
                            <CardContent>
                                <Link component={RouterLink} to={`/post/${post._id}`} underline="hover">
                                    <Typography variant="h5" color="primary">{post.title}</Typography>
                                </Link>
                                <Typography variant="body2">{post.content.substring(0, 100)}...</Typography>
                                <Typography variant="caption" color="textSecondary">
                                    Published: {`${moment(post.date).format('MMMM d, yyyy')} ${moment(post.date).format('h:mm A')}`}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}

export default BlogList;
