import { Box, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import LoadOrders from './LoadOrders/LoadOrders';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const ManageAllOrders = () => {
    const [allOrders, setAllOrders] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => {
                setAllOrders(data);
            })
    }, [])

    //DELETE Order
    const handleCancelOrder = (id) => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/orders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = allOrders.filter(allOrder => allOrder._id !== id);
                        setAllOrders(remainingOrders);
                    }
                })
        }
    }
    return (
        <Box>
            <Typography variant='h5'>Manage Orders: {allOrders?.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Ordered by</TableCell>
                            <TableCell>Product</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Status</TableCell>
                            <TableCell align="right">Update Status</TableCell>
                            <TableCell align="right">Cancel Order</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            allOrders.map(allOrder => <LoadOrders
                                key={allOrder._id}
                                allOrder={allOrder}
                                handleCancelOrder={handleCancelOrder}
                            ></LoadOrders>)
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageAllOrders;