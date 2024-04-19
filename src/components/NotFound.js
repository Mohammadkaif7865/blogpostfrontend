import React from 'react';
import { Typography, Button, Container } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NotFound() {
    const navigate = useNavigate();

    return (
        <Container component="main" maxWidth="xs" style={{ marginTop: '100px', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                404 - Page Not Found
            </Typography>
            <Typography variant="subtitle1">
                Sorry, the page you are looking for does not exist.
            </Typography>
            <Button
                variant="contained"
                color="primary"
                style={{ marginTop: '20px' }}
                onClick={() => navigate('/')}
            >
                Go Home
            </Button>
        </Container>
    );
}

export default NotFound;
