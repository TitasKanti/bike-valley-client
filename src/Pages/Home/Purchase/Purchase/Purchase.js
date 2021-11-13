import React, { useEffect, useState } from 'react';
import { Button, CardActionArea, CardActions, CardMedia, CardContent, Card, Grid, Typography, Container, TextField, Box } from '@mui/material';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../../hooks/useAuth';

const Purchase = () => {
    const { id } = useParams();
    const [order, setOrder] = useState({});
    const { user } = useAuth();

    useEffect(() => {
        fetch(`https://morning-ocean-94210.herokuapp.com/bikes/${id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [])

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newOrder = { ...order, status: 'pending' };
        newOrder[field] = value;
        setOrder(newOrder); console.log(newOrder);
        e.preventDefault();
    }

    const handleSubmit = e => {
        const newOrder = { ...order, status: 'pending', userName: user?.displayName, email: user?.email };
        //new order sending to the server
        fetch('https://morning-ocean-94210.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('Successfully placed the order')
                }
            })
        e.preventDefault();
        e.target.reset();
    }

    return (
        <Container sx={{ textAlign: 'justify', mt: 5 }}>
            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Card sx={{ maxWidth: 700 }}>
                        <CardActionArea>
                            <CardMedia
                                component="img"
                                height="200"
                                image={order.img}
                                alt="motorbike"
                            />
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="div">
                                    {order.name}
                                </Typography>
                                <Typography variant="body2" color="text.secondary">
                                    {order.detail}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <Button sx={{ width: 1 }} variant="contained">
                            Price: {order.price}
                        </Button>
                        <CardActions>
                            <Link style={{ textDecoration: 'none' }} to="/home"><Button size="small">Go Home</Button></Link>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid sx={{ display: 'flex', justifyContent: "center", alignItems: 'center' }} item xs={12} md={4}>
                    <Box>
                        <Typography variant="h5">
                            To proceed, please fill the form and place order.
                        </Typography>
                        <form onSubmit={handleSubmit}>
                            <TextField
                                disabled
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                defaultValue={user.displayName}
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                disabled
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                defaultValue={user.email}
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Address"
                                name="address"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Phone No."
                                name="phone"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Place Order</Button>
                        </form>
                    </Box>

                </Grid>
            </Grid>
        </Container >
    );
};

export default Purchase;