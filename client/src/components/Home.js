import React, { useEffect, useState } from 'react'
import axios from "axios";
import { Apis } from "../apis/Apis"
import { useDispatch, useSelector } from 'react-redux';
import { GetCartLength, GetDataAction } from './Redux/Action';
import { CircularProgress, Box } from '@mui/material';
import { toast, ToastContainer } from "react-toastify"
import { useNavigate } from "react-router-dom"

export const Home = () => {
    const [isLoading, setLoading] = useState(false)
    const dispatch = useDispatch();
    let user = useSelector(e => e.Auth);
    const navigate = useNavigate()

    useEffect(() => {
        getUserData();
    }, []);

    const getUserData = async () => {
        setLoading(true);
        const result = await axios({
            url: Apis?.userLogin,
            method: "post",
            data: { "email": "vishh12@gmail.com" }
        });
        if (result?.data?.success) {
            dispatch(GetDataAction(result?.data?.data));
            setTimeout(() => {
                setLoading(false);
            }, 2000);
            getCart();
            toast.success("Login Succefully!")
            setTimeout(() => {
                navigate("/products")
            }, 1000)
        }
    }

    let getCart = async () => {
        const result = await axios({
            url: `${Apis?.getCart}?userId=${user?._id}`,
            method: "get"
        });
        if (result?.data?.success) {
            console.log("==++", result?.data?.total);
            dispatch(GetCartLength(result?.data?.total))
        }
    }

    return (
        <div>
            {!isLoading ?
                <div>Home</div>
                :
                <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
                    <CircularProgress />
                </Box>
            }
            <ToastContainer />
        </div>
    )
}
