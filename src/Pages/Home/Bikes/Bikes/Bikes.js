import { Box, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../../Shared/Footer/Footer';
import Navigation from '../../../Shared/Navigation/Navigation';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://morning-ocean-94210.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Navigation></Navigation>
            <Typography sx={{ my: 5, color: 'info.main' }} variant="h3">
                Featured Bikes
            </Typography>
            <Grid container spacing={4}>

                {
                    bikes.map(bike => <Bike
                        key={bike._id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </Grid>
            <Box>
                <Footer></Footer>
            </Box>
        </>
    );
};

export default Bikes;