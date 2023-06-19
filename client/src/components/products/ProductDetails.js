import React, { useEffect, useState } from 'react'
import { Grid, Paper, Typography, Button } from '@mui/material';
import { useParams } from 'react-router';
import axios from 'axios';
import { Apis } from '../../apis/Apis';
import { useDispatch, useSelector } from 'react-redux';
import { ToastContainer, toast } from 'react-toastify';
import { GetCartLength } from '../Redux/Action';

export const ProductDetails = () => {
    const [state, setState] = useState({
        data: {},
    })
    let user = useSelector(e => e.Auth);
    let dispatch = useDispatch();
    const { id } = useParams();
    console.log(id);

    useEffect(() => {
        getdata();
    }, []);

    let getCart = async () => {
        const result = await axios({
            url: `${Apis?.getCart}?userId=${user?._id}`,
            method: "get"
        });
        if (result?.data?.success) {
            console.log(result?.data?.total);
            dispatch(GetCartLength(result?.data?.total))
        }
    }

    const getdata = async () => {
        const result = await axios({
            url: `${Apis?.getProductDetails}/${id}`,
            method: "get"
        });
        if (result?.data?.success) {
            setState(pre => ({ ...pre, data: result?.data?.data }))
        }
    }

    const handleAddToCart = async (id) => {
        let data = {
            "userId": user?._id,
            "productId": id
        }
        const result = await axios({
            url: `${Apis?.createCart}`,
            method: "post",
            data: data,
        })
        if (result?.data?.success) {
            console.log(data)
            getCart();
            toast.success("Add to cart succefully!")
        }
    }


    return (
        <div>
            <Grid container spacing={2}>
                <Grid item xs={12} md={6}>
                    <Paper elevation={0}>
                        <img src={state?.data.image} alt={state?.data.name} style={{ width: '100%', height: 'auto' }} />
                    </Paper>
                </Grid>
                <Grid item xs={12} md={6}>
                    <Paper elevation={3} sx={{ padding: '20px' }}>
                        <Typography variant="h5" gutterBottom>
                            {state?.data.name}
                        </Typography>
                        <Typography variant="subtitle1" color="textSecondary" gutterBottom>
                            Price: {state?.data.price}
                        </Typography>
                        <Typography variant="body1" color="textSecondary" gutterBottom>
                            Description: {state?.data.description}
                        </Typography>
                        <Typography variant="body1" color="textSecondary">
                            Quality: {state?.data.quantity}
                        </Typography>
                        <Button variant="contained" color="primary" onClick={() => handleAddToCart(state?.data?._id)} sx={{ marginTop: '20px' }}>
                            Add to Cart
                        </Button>
                    </Paper>
                </Grid>
            </Grid>
            <ToastContainer />
        </div>
    )
}
