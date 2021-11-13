import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { BrowserRouter as Router, Switch, Route, Link, useParams, useRouteMatch } from "react-router-dom";
import { Button } from '@mui/material';
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import AddBike from '../AddBike/AddBike';
import useAuth from '../../../hooks/useAuth';
import AdminRoute from '../../Login/AdminRoute/AdminRoute';
import Pay from '../Pay/Pay';
import Review from '../Review/Review';
import MyOrders from '../MyOrders/MyOrders';
import ManageAllOrders from '../ManageAllOrders/ManageAllOrders';

const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <List style={{ display: 'flex', flexDirection: 'column' }}>
                <Link style={{ textDecoration: 'none' }} to="/home"><Button color="inherit"> Home </Button></Link>
                <Divider />

                {admin ? <Box style={{ display: 'flex', flexDirection: 'column' }}>
                    <Link style={{ textDecoration: 'none' }} to={`${url}/manageAllOrders`}><Button color="inherit"> Manage Orders</Button></Link>
                    <Divider />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/makeAdmin`}><Button color="inherit"> Make Admin </Button></Link>
                    <Divider />

                    <Link style={{ textDecoration: 'none' }} to={`${url}/addBike`}><Button color="inherit"> Add Bike </Button></Link>
                    <Divider />
                </Box>
                    :
                    <Box>
                        <Link style={{ textDecoration: 'none' }} to={`${url}`}><Button color="inherit"> Dashboard </Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/myOrders`}><Button color="inherit"> My Orders </Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/review`}><Button color="inherit"> Review </Button></Link>
                        <Divider />

                        <Link style={{ textDecoration: 'none' }} to={`${url}/payment`}><Button color="inherit"> Payment </Button></Link>
                        <Divider />
                    </Box>}
                <Divider />

                <Button onClick={logOut} color="inherit">Logout</Button>
                <Divider />
            </List>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/review`}>
                        <Review></Review>
                    </Route>
                    <Route path={`${path}/payment`}>
                        <Pay></Pay>
                    </Route>
                    <Route path={`${path}/myOrders`}>
                        <MyOrders></MyOrders>
                    </Route>
                    <AdminRoute path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </AdminRoute>
                    <AdminRoute path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </AdminRoute>
                    <AdminRoute path={`${path}/addBike`}>
                        <AddBike></AddBike>
                    </AdminRoute>
                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
