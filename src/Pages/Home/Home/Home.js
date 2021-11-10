import { Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Bike from '../Bikes/Bike/Bike';

const Home = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('/fakeData.json')
            .then(res => res.json())
            .then(data => setBikes(data))
    }, [])

    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>

            {/* Featured bike home section */}
            <Typography sx={{ my: 5, color: 'info.main' }} variant="h3">
                Featured Bikes
            </Typography>
            <Grid container spacing={4}>

                {
                    bikes.slice(0, 6).map(bike => <Bike
                        key={bike.id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </Grid>

        </div>
    );
};

export default Home;