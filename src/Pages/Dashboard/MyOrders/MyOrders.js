import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import LoadMyOrders from './LoadMyOrders/LoadMyOrders';


const MyOrders = () => {
    const { user } = useAuth();
    const [orders, setOrders] = useState([]);

    useEffect(() => {
        fetch(`https://morning-ocean-94210.herokuapp.com/orders?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setOrders(data)
            })
    }, [])

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
                    const remainingOrders = orders?.filter(order => order?._id !== id);
                    setOrders(remainingOrders);
                })
        }
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
                            <TableCell align="right">Cancel Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            orders?.map(order => <LoadMyOrders
                                key={order._id}
                                order={order}
                                handleCancelOrder={handleCancelOrder}
                            ></LoadMyOrders>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default MyOrders;