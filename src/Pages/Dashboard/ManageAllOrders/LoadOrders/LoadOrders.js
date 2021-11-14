import React, { useEffect, useState } from 'react';
import TableCell from '@mui/material/TableCell';
import { Button, TableRow } from '@mui/material';

const LoadOrders = ({ allOrder, handleCancelOrder }) => {
    const { name, _id, model, price, userName } = allOrder;
    const [order, setOrder] = useState({});
    const [disable, setDisable] = useState(false)

    useEffect(() => {
        fetch(`http://localhost:5000/orders/${_id}`)
            .then(res => res.json())
            .then(data => setOrder(data))
    }, [_id])

    //update status
    const handleStatusChange = () => {
        const updatedStatus = 'shipped';
        const updatedOrder = { ...order };
        updatedOrder.status = updatedStatus;
        setOrder(updatedOrder);
    }

    const handleUpdateStatus = id => {
        const url = `http://localhost:5000/orders/${_id}`;
        fetch(url, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    alert('updated status successfully');
                }
            })
    }

    return (
        <>
            <TableRow
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
                <TableCell component="th" scope="row">
                    {userName}
                </TableCell>
                <TableCell component="th" scope="row">
                    {name}
                </TableCell>
                <TableCell align="right">{model}</TableCell>
                <TableCell align="right">{price}</TableCell>
                <TableCell align="right">
                    <input type="button" onClick={handleStatusChange} value={order?.status || ''} />
                </TableCell>

                <TableCell align="right">
                    <Button disabled={disable} variant='contained'
                        onClick={() => {
                            handleUpdateStatus(_id)
                            setDisable(true)
                        }
                        }> Update Status </Button>
                </TableCell>

                <TableCell align="right">
                    <Button variant='contained' onClick={() => handleCancelOrder(_id)}> X </Button>
                </TableCell>
            </TableRow>
        </>
    );
};

export default LoadOrders;