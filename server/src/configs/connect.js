const mongoose = require("mongoose");

const connect = () => {
    mongoose.connect(process.env.MONGODB_CONNECT);
}

module.exports = connect;