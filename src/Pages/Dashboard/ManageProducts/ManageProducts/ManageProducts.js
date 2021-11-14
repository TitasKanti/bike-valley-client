import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Box, Typography } from '@mui/material';
import LoadProducts from '../LoadProducts/LoadProducts';

const ManageProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://morning-ocean-94210.herokuapp.com/bikes')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleEraseProduct = id => {
        const proceed = window.confirm('Are you sure, you want to delete?');
        if (proceed) {
            const url = `https://morning-ocean-94210.herokuapp.com/bikes/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('deleted successfully')
                        const remainingOrders = products.filter(product => product._id !== id);
                        setProducts(remainingOrders);
                    }
                })
        }
    }

    return (
        <Box>
            <Typography variant='h5'>Manage Orders: {products?.length}</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="orders table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Model</TableCell>
                            <TableCell align="right">Price</TableCell>
                            <TableCell align="right">Erase Product</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            products.map(product => <LoadProducts
                                key={product._id}
                                product={product}
                                handleEraseProduct={handleEraseProduct}
                            ></LoadProducts>)
                        }

                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    );
};

export default ManageProducts;