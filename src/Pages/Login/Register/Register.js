import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/loginimg.jpg';

const Register = () => {
    const [signupData, setSignupData] = useState({});
    const history = useHistory();

    const { user, registerUser, loading, authError } = useAuth();

    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newSignupData = { ...signupData };
        newSignupData[field] = value;
        setSignupData(newSignupData);
        e.preventDefault();
    }

    const handleRegistration = e => {
        if (signupData.password !== signupData.password2) {
            alert('your password did not match');
            e.target.reset()
            e.preventDefault();
            return;
        }
        registerUser(signupData.email, signupData.password, signupData.name, history);
        e.target.reset()
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Register
                    </Typography>

                    {
                        !loading && <form onSubmit={handleRegistration}>
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Name"
                                name="name"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Email"
                                name="email"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password"
                                onBlur={handleOnBlur}
                                variant="standard" />
                            <TextField
                                sx={{ width: '75%', m: 1 }}
                                id="standard-basic"
                                label="Your Password"
                                type="password"
                                name="password2"
                                onBlur={handleOnBlur}
                                variant="standard" />

                            <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Register</Button>
                            <NavLink style={{ textDecoration: 'none' }} to="/login">
                                <Button variant='text'>Already have an account? Please Login</Button>
                            </NavLink>
                        </form>
                    }
                    {
                        loading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Successfully Registered!</Alert>
                    }
                    {
                        authError && <Alert severity="error">{authError}</Alert>
                    }
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{ width: '100%' }} src={login} alt='login' />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Register;