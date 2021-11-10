import React from 'react';
import { Typography } from '@mui/material';
import banner from '../../../images/banner.png';
import { Box } from '@mui/system';

const Banner = () => {
    return (
        <Box
            style={{
                background: `url(${banner})`,
                height: '560px',
                backgroundSize: 'cover',
                color: 'yellow',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'end'
            }}
            sx={{ mb: 3, pr: 5 }}>
            <Typography sx={{ fontWeight: 300 }} variant='h4'>
                CHOOSE YOUR
            </Typography>
            <Typography sx={{ fontWeight: 300, py: 2 }} variant='h4'>
                DREAM BIKE
            </Typography>
            <Typography sx={{ fontWeight: 300 }} variant='h4'>
                FROM BIKE VALLEY
            </Typography>
        </Box>
    );
};

export default Banner;