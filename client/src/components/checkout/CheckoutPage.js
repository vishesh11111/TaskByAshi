import React, { useEffect, useState } from 'react';
import { Box, Container, CardContent, CardMedia, Grid, Card, TextField, Typography } from '@mui/material';
import { Apis } from '../../apis/Apis';
import axios from 'axios';
import { useSelector } from 'react-redux';
import PaymentMethod from './PaymentMethod';


const CheckoutPage = () => {
    let user = useSelector(e => e.Auth);
    const [state, setState] = useState();
    const [totalPrice, settotalPrice] = useState(0)

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

    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: "50%" }}>
                <Container maxWidth="sm">
                    <Box mt={4}>
                        <Typography variant="h5" gutterBottom>
                            Checkout
                        </Typography>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Billing Details
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Last Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Company Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Address" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Apartment" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Town/City" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="State" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Zip Code" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Contact Number" />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography variant="h6" gutterBottom>
                                    Ship to a Different Address
                                </Typography>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="First Name" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Last Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Company Name" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Address" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Apartment" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Town/City" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="State" />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField fullWidth label="Zip Code" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Email" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth label="Contact Number" />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField fullWidth multiline rows={4} label="Note about your order" />
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
            <div style={{ width: "50%", marginTop: "50px" }}>
                <Grid container spacing={2}>
                    {state?.map((product) => (
                        <Grid item xs={12} key={product._id}>
                            <Card sx={{ height: 50, display: 'flex' }}>
                                <CardMedia component="img" alt={product?.productId.name} height="100%" image={product?.productId.image} style={{ cursor: 'pointer', width: "15%" }} />
                                <CardContent sx={{ flex: 1 }}>
                                    <Typography style={{ marginTop: "-18px" }} sx={{ marginTop: "0px" }} variant="h6" component="div">
                                        {product?.productId.name}
                                    </Typography>
                                    <Typography variant="body1" color="textSecondary">
                                        Price: {product?.productId.price}
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
                <PaymentMethod />
            </div>
        </div>
    );
};

export default CheckoutPage;
