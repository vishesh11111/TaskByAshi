import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Card, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import "./css/product.css"
import { Link } from 'react-router-dom';

export const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/products');
        setProducts(response.data?.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  console.log("=>", products)

  return (
    <div className='main-product'>
      <Grid container spacing={2}>
        {products.map((product) => (
          <Grid component={Link} to={`/product/${product?._id}`} item xs={12} sm={6} md={4} sx={{ textDecoration: "none" }} key={product._id}>
            <Card>
              <CardMedia
                className='cart-details'
                component="img"
                alt={product.name}
                height="140"
                image={product.image}
                style={{ cursor: 'pointer' }}
              />
              <CardContent>
                <Typography variant="h6" component="div">
                  {product.name}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Price: {product.price}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Quality: {product.quantity}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  )
}
