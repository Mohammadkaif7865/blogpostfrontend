// src/components/BlogHeader.js
import React from 'react';
import { Typography, Paper, Box } from '@mui/material';

const BlogHeader = () => {
    const headerStyle = {
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.7), rgba(255,255,255,0.7)), url(header-background.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        padding: '20px',
        marginBottom: '30px'
    };

    return (
        <Paper style={headerStyle} elevation={4}>
            <Box display="flex" justifyContent="center" alignItems="center">
                <Typography variant="h3" component="h1" color="textPrimary" gutterBottom style={{
                    fontFamily: "cursive",
                }}>
                    Blog Posts
                </Typography>
            </Box>
        </Paper>
    );
};

export default BlogHeader;
