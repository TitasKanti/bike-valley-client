import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { NavLink } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { makeStyles } from '@mui/styles';
import { Box, useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';


const Navigation = () => {
    const { user, logOut } = useAuth()
    const theme = useTheme();

    const useStyle = makeStyles({
        navItem: {
            color: '#fff',
            textDecoration: 'none'
        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none'
            }
        },
        mobileNavItem: {
            textDecoration: 'none',
            color: '#000'
        }
    })

    const { navItem, navIcon, navItemContainer, mobileNavItem } = useStyle();
    const [state, setState] = React.useState(false);

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            Bike Valley
                        </Typography>
                        <span className={navItemContainer}>
                            <NavLink className={navItem} to="/bikes">
                                <Button color="inherit">Explore</Button>
                            </NavLink>
                            {
                                user?.email ?
                                    <span>
                                        <NavLink className={navItem} to="/dashboard">
                                            <Button color="inherit"> Dashboard </Button>
                                        </NavLink>
                                        <Typography style={{ color: 'yellow' }} variant="span"> {user.displayName} </Typography>
                                        <Button onClick={logOut} color="inherit">Logout</Button>
                                    </span>
                                    :
                                    <NavLink className={navItem} to="/login">
                                        <Button color="inherit">Login</Button>
                                    </NavLink>
                            }
                        </span>
                    </Toolbar>
                </AppBar>
            </Box>
            <div>

                <React.Fragment>
                    <Drawer
                        open={state}
                        onClose={() => setState(false)}
                    >
                        <span
                            sx={{ width: 250 }}
                            role="presentation"

                        >
                            <List>
                                <ListItem button>
                                    <ListItemText>
                                        <NavLink className={mobileNavItem} to="/bikes">
                                            <Button color="inherit">Explore</Button>
                                        </NavLink>
                                    </ListItemText>
                                </ListItem>
                                <Divider />

                                {/*  <ListItem button>
                                    <ListItemText>
                                        <NavLink className={mobileNavItem} to="/bikes">
                                            <Button color="inherit">Explore</Button>
                                        </NavLink>
                                    </ListItemText>
                                </ListItem>
                                <Divider /> */}

                                <ListItem button>
                                    <ListItemText>
                                        {
                                            user?.email ?
                                                <NavLink className={mobileNavItem} to="/dashboard">
                                                    <Button color="inherit"> Dashboard </Button>
                                                </NavLink>
                                                :
                                                <NavLink className={mobileNavItem} to="/login">
                                                    <Button color="inherit">Login</Button>
                                                </NavLink>
                                        }
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                                <ListItem button>
                                    <ListItemText>
                                        {
                                            user?.email &&
                                            <Box>
                                                <Typography style={{ color: 'blue' }} variant="div">{user.displayName}</Typography>
                                                <Button onClick={logOut} color="inherit">Logout</Button>
                                            </Box>
                                        }
                                    </ListItemText>
                                </ListItem>
                                <Divider />
                            </List>
                        </span>
                    </Drawer>
                </React.Fragment>
            </div>
        </>
    );
};

export default Navigation;