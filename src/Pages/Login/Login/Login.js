import { Button, Container, Grid, TextField, Typography, CircularProgress, Alert } from '@mui/material';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import login from '../../../images/loginimg.jpg';

const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, loginUser, loading, authError } = useAuth();
    const location = useLocation();
    const history = useHistory();

    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
        e.preventDefault();
    }

    const handleLogin = e => {
        loginUser(loginData.email, loginData.password, location, history);
        e.target.reset();
        e.preventDefault();
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }} item xs={12} md={6}>
                    <Typography variant="h5" gutterBottom>
                        Login
                    </Typography>

                    {!loading && <form onSubmit={handleLogin}>
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Email"
                            type="email"
                            name="email"
                            onBlur={handleOnChange}
                            variant="standard" />
                        <TextField
                            sx={{ width: '75%', m: 1 }}
                            label="Your Password"
                            type="password"
                            name="password"
                            onBlur={handleOnChange}
                            variant="standard" />

                        <Button sx={{ width: '75%', m: 1 }} type="submit" variant="contained">Login</Button>
                        <NavLink style={{ textDecoration: 'none' }} to="/register">
                            <Button variant='text'>New User? Please Register</Button>
                        </NavLink>
                    </form>}
                    {
                        loading && <CircularProgress />
                    }
                    {
                        user?.email && <Alert severity="success">Login Successfull!</Alert>
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

export default Login;