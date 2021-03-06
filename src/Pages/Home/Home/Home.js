import { Box, Container, Grid, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import Footer from '../../Shared/Footer/Footer';
import Navigation from '../../Shared/Navigation/Navigation';
import Banner from '../Banner/Banner';
import Bike from '../Bikes/Bike/Bike';
import UserReviews from '../UserReviews/UserReviews';
import ExtraPart from './ExtraPart/ExtraPart/ExtraPart';

const Home = () => {
    const [bikes, setBikes] = useState([]);

    useEffect(() => {
        fetch('https://morning-ocean-94210.herokuapp.com/bikes')
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
                        key={bike._id}
                        bike={bike}
                    >
                    </Bike>)
                }
            </Grid>


            <Box
                sx={{ py: 5 }}>
                <ExtraPart></ExtraPart>
            </Box>

            <Container>
                <UserReviews></UserReviews>
            </Container>

            <Footer></Footer>
        </div>
    );
};

export default Home;