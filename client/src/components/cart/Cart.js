import React, { useEffect, useState } from 'react'
import { Apis } from "../../apis/Apis"
import axios from 'axios';
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { Grid, Card, CardMedia, CardContent, Typography } from '@mui/material';
import { Button } from '@mui/material';

// checkout
export const Cart = () => {
    const [state, setState] = useState();
    const [totalPrice, settotalPrice] = useState(0)
    const navigate = useNavigate();
    let user = useSelector(e => e.Auth);
    useEffect(() => {
        getCart();
    }, [])

    let getCart = async () => {
        const result = await axios({
            url: `${Apis?.getCart}?userId=${user?._id}`,
            method: "get"
        });
        if (result?.data?.success) {
            setState(result?.data?.data)
            let totalPrice = 0;
            result?.data?.data?.map((item) => {
                totalPrice += Number(item?.productId?.price)
            })
            settotalPrice(totalPrice);
        }
    }

    const handleNavigate = () => {
        navigate(`/checkout`)
    }

    return (
        <div>
            <Grid container spacing={2}>
                {state?.map((product) => (
                    <Grid component={Link} to={`/product/${product?.productId?._id}`} item xs={12} key={product._id}>
                        <Card sx={{ height: 250, display: 'flex' }}>
                            <CardMedia component="img" alt={product?.productId.name} height="100%" image={product?.productId.image} style={{ cursor: 'pointer', width: "15%" }} />
                            <CardContent sx={{ flex: 1 }}>
                                <Typography variant="h6" component="div">
                                    {product?.productId.name}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Price: {product?.productId.price}
                                </Typography>
                                <Typography variant="body1" color="textSecondary">
                                    Quality: {product?.productId.quantity}
                                </Typography>
                                <Typography variant="body2" color="textSecondary">
                                    {product?.productId.description}
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                ))}
            </Grid>
            <Button onClick={handleNavigate} fullWidth size='large' variant="contained" color="primary">
                Checkout (${totalPrice})
            </Button>
        </div>
    )
}
