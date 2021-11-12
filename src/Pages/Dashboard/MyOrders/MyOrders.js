import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Button, Typography } from '@mui/material';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-ocean-94210.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [user.email])

    //DELETE ORDER
    const handleCancelOrder = id => {
        const proceed = window.confirm('Are you sure! want to cancel the order?');
        if (proceed) {
            fetch(`https://morning-ocean-94210.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Successfully cancelled the order')
                    }
                    const remainingOrders = orders?.find(order => order?._id !== id);
                    setOrders(remainingOrders);
                })
        }
    }

    //UPDATE ORDER
    const handleUpdateOrder = (id) => {

    }

    return (
        <Box>
            <Typography variant='h5'>My Orders: {orders?.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Cancel</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {orders?.map(order => (
                            <TableRow
                                key={order._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    {order.name}
                                </TableCell>
                                <TableCell align="right">{order.model}</TableCell>
                                <TableCell align="right">{order.price}</TableCell>
                                <TableCell align="right">
                                    <Button variant='contained' onClick={() => handleUpdateOrder(order?._id)}> {order.status} </Button>
                                </TableCell>
                                <TableCell align="right">
                                    <Button variant='contained' onClick={() => handleCancelOrder(order?._id)}> X </Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default MyOrders;