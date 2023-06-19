
const CartModel = require('../models/cart.model');
let CartController = {};

CartController.GetCarts = async (req, res) => {
    try {
        const userId = req.query.userId
        const carts = await CartModel.find({ "userId": userId })
            .populate('productId')
            .populate('userId');

        const totalData = await CartModel.find({ "userId": userId }).countDocuments()
        res.status(200).send({ success: true, message: "get data successfull!", total: totalData, data: carts })
    } catch (error) {
        res.status(500).send({ success: false, message: error })
    }
}

CartController.createCart = async (req, res) => {
    try {
        const body = req.body;
        const carts = await CartModel.create(body)
        res.status(200).send({ success: true, message: "add to cart successfull!" })
    } catch (error) {
        res.status(500).send({ success: false, message: error })
    }
}
module.exports = CartController;
