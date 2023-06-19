
const ProductModel = require("../models/product.model")

let productController = {};

productController.getProducts = async (req, res) => {
    try {
        const products = await ProductModel.find().lean().exec();
        res.status(200).send({ success: true, message: "get data successfull!", data: products })
    } catch (error) {
        res.status(500).send({ success: false, message: error })
    }
}

productController.CreateProduct = async (req, res) => {
    try {

    } catch (error) {

    }
}

productController.GetProductDetails = async (req, res) => {
    try {
        let id = req.params.id;
        const products = await ProductModel.findById(id)
        res.status(200).send({ success: true, message: "get data successfull!", data: products })
    } catch (error) {
        res.status(500).send({ success: false, message: error })
    }
}

module.exports = productController;
