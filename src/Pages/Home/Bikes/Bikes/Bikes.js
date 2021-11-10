import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Bike from '../Bike/Bike';

const Bikes = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])
    return (
        <>
            <Typography sx={{ my: 5, color: 'info.main' }} variant="h3">
                Featured Bikes
            </Typography>
            <Grid container spacing={4}>

                {
                    bikes.map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </Grid>
        </>
    );
};

export default Bikes;