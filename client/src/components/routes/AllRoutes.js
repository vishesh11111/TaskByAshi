import React from 'react'
import { Routes, Route } from "react-router-dom"
import { Product } from '../products/Product'
import { Home } from '../Home'
import { ProductDetails } from '../products/ProductDetails'
import { Cart } from '../cart/Cart'
import CheckoutPage from '../checkout/CheckoutPage'

export const AllRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/products' element={<Product />}></Route>
            <Route path='/cart' element={<Cart />}></Route>
            <Route path='/product/:id' element={<ProductDetails />}></Route>
            <Route path='/checkout' element={<CheckoutPage />}></Route>
        </Routes>
    )
}
