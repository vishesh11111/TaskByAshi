
const express = require("express");
const route = express.Router();


const ProductController = require("../controller/product.controller");
const CartController = require("../controller/cart.controller");
const UserController = require("../controller/auth.controller");




//product
route.get("/products", ProductController.getProducts)
route.post("/create/product", ProductController.CreateProduct)
route.get("/product/:id", ProductController.GetProductDetails);


//Cart controller
route.get("/cart/products", CartController.GetCarts);
route.post("/create/cart", CartController.createCart);

// auth
route.post("/auth", UserController.GetUser)


module.exports = route;

