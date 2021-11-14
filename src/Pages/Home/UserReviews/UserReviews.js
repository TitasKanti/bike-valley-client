import React, { useEffect, useState } from 'react';
import LoadReview from './LoadReview/LoadReview';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import { Paper, TableRow } from '@mui/material';

const UserReviews = () => {
    const [userReviews, setUserReviews] = useState([]);

    useEffect(() => {
        fetch('https://morning-ocean-94210.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setUserReviews(data))
    }, [])
    return (
        <div>
            <h2>User Reviews</h2>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Review</TableCell>
                            <TableCell align="right">Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                        {
                            userReviews.map(userReview => <LoadReview
                                key={userReview._id}
                                userReview={userReview}
                            ></LoadReview>)
                        }
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default UserReviews;