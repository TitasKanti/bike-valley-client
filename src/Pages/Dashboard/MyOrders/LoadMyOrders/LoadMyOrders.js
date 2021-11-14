import React from 'react';
import TableCell from '@mui/material/TableCell';
import { Button, TableRow } from '@mui/material';

const LoadMyOrders = ({ order, handleCancelOrder }) => {
    const { name, _id, model, price, status } = order;
    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="right">{model}</TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right">{status}</TableCell>

                <TableCell align="right">
                    <Button variant='contained' onClick={() => handleCancelOrder(_id)}> X </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default LoadMyOrders;