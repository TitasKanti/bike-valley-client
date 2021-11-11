import React, { useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Card, Grid, Typography, Container } from '@mui/material';
import { Link, useParams } from 'react-router-dom';

const Purchase = () => {
    const { id } = useParams();
    const [bike, setBike] = useState({});

    useEffect(() => {
        fetch(`http://localhost:5000/bikes/${id}`)
            .then(res => res.json())
            .then(data => setBike(data))
    }, [])

    return (
        <Container sx={{ textAlign: 'justify', mt: 4 }}>
            <Grid item xs={12} md={12}>
                <Card sx={{ maxWidth: 600, m: '0 auto' }}>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="400"
                            image={bike.img}
                            alt="motorbike"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                {bike.name}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                {bike.detail}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <Button sx={{ width: 1 }} variant="contained">
                        Price: {bike.price}
                    </Button>
                    <CardActions>
                        <Link style={{ textDecoration: 'none' }} to="/bikes"><Button size="small">Go Back</Button></Link>
                    </CardActions>
                </Card>
            </Grid>
        </Container>
    );
};

export default Purchase;