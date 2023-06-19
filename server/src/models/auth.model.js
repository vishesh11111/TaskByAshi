const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    name: { type: String },
    adress: { type: String },
    PinCode: { type: String },
    contactNo: { type: String },
    email: { type: String }
});

module.exports = mongoose.model("user", UserSchema);