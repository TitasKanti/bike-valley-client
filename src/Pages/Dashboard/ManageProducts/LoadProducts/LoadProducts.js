import React from 'react';
import TableCell from '@mui/material/TableCell';
import { Button, TableRow } from '@mui/material';

const LoadProducts = ({ product, handleEraseProduct }) => {
    const { name, model, price, _id } = product;
    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">{name}</TableCell>
                <TableCell align="right">{model}</TableCell>
                <TableCell align="right">{price}</TableCell>

                <TableCell align="right">
                    <Button variant='contained' onClick={() => handleEraseProduct(_id)}> X </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default LoadProducts;