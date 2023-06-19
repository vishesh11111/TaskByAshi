
const AUthModel = require('../models/auth.model');
let UserController = {};

UserController.GetUser = async (req, res) => {
    try {
        let { email } = req.body;
        console.log(email);
        let user = await AUthModel.findOne({ "email": email });
        res.status(200).send({ success: true, message: "user get successfull!", data: user })
    } catch (error) {
        res.status(500).send({ success: false, message: error })
    }
}

module.exports = UserController;
