// src/components/Footer.js
import React from 'react';
import { Box, Container, Typography } from '@mui/material';

function Footer() {
    return (
        <Box component="footer" sx={{ bgcolor: 'background.paper', py: 6 }}>
            <Container maxWidth="lg">
                <Typography variant="subtitle1" align="center" color="text.secondary" component="p">
                    © 2024 My Blog. All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
}

export default Footer;
