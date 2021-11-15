import { Box, Typography } from '@mui/material';
import React from 'react';
import bg from '../../../../../images/extra-bg.jpg';

const ExtraPart = () => {
    return (
        <Box
            style={{
                background: `url(${bg})`,
                height: '560px',
                backgroundSize: 'cover',
                color: 'white',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}
            sx={{ mb: 3, pr: 5 }}>

            <Typography sx={{ fontWeight: 900 }} variant='h4'>
                MAKE YOUR FIRST EVER
            </Typography>
            <Typography sx={{ fontWeight: 900, py: 2 }} variant='h4'>
                ORDER SOON
            </Typography>
            <Typography sx={{ fontWeight: 900 }} variant='h4'>
                GET EXTRA  <span style={{ fontSize: 100, color: 'skyblue' }}>20%</span> DISCOUNT
            </Typography>
        </Box>
    );
};

export default ExtraPart;