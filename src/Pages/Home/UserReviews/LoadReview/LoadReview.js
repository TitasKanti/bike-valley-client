import React from 'react';
import TableRow from '@mui/material/TableRow';
import { TableCell } from '@mui/material';

const LoadReview = ({ userReview }) => {
    const { name, review, rating } = userReview;
    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="right">{review}</TableCell>
                <TableCell align="right">{rating}</TableCell>
            </TableRow>
        </>
    );
};

export default LoadReview;