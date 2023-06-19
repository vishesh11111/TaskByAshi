import React, { useEffect, useState } from 'react';
import { AppBar, Box, Toolbar, IconButton, Typography, Badge } from '@mui/material';
import { ShoppingCart, AccountCircle, Api } from '@mui/icons-material';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { GetCartLength } from './Redux/Action';
import axios from 'axios';
import { Apis } from '../apis/Apis';

const Navbar = () => {

    const [length, setLength] = useState();
    const cartLength = useSelector(e => e.cartLength)

    useEffect(() => {
        setLength(cartLength)
    }, [cartLength])

    return (
        <AppBar position="static">
            <Toolbar>
                {/* Left section */}
                <IconButton edge="start" color="inherit" aria-label="menu">
                    {/* Add your left-side icon component here */}
                    <img alt="Logo" height="30px" src="https://www.rlogical.com/wp-content/uploads/2023/03/MERN-Stack-Best-for-Developing-Web-Apps.webp" />
                </IconButton>

                <Box sx={{ flexGrow: 1, }} display="flex" alignItems="center" marginLeft="8px">
                    <Typography variant="body1" component={Link} to="/" sx={{ marginRight: '5px', textDecoration: "none" }}>
                        Home
                    </Typography>
                    <Typography variant="body1" component={Link} to="/products" sx={{ marginLeft: '5px', textDecoration: "none" }}>
                        Products
                    </Typography>
                </Box>
                <IconButton component={Link} to="/cart" color="inherit" aria-label="cart">
                    <Badge badgeContent={length} color="error">
                        <ShoppingCart />
                    </Badge>
                </IconButton>
                <IconButton color="inherit" aria-label="profile">
                    <AccountCircle />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
