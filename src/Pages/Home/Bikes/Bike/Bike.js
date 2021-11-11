import React from 'react';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Card, Grid, Typography } from '@mui/material';
import { useHistory } from 'react-router-dom';

const Bike = ({ bike }) => {
    const { img, name, price, detail, _id } = bike;
    const history = useHistory();
    const handlePurchase = id => {
        history.push(`/purchase/${id}`);
    }
    return (
        <Grid item xs={12} md={4}>
            <Card sx={{ maxWidth: 300, m: '0 auto' }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="200"
                        image={img}
                        alt="motorbike"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {detail.slice(0, 100)}...
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <Button sx={{ width: 1 }} variant="contained">
                    Price: {price}
                </Button>
                <CardActions>
                    <Button onClick={() => handlePurchase(_id)} size="small" color="primary">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Bike;