import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

const Bike = ({ bike }) => {
    const { img, name, price, detail } = bike;
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
                    <Button size="small" color="primary">Buy Now</Button>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Bike;