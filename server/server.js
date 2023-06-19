const express = require("express");
require("dotenv").config();
const connect = require("./src/configs/connect")
const app = express();
const cors = require("cors");
const port = process.env.PORT
app.use(express.json());
app.use(cors());

const AllRoutes = require("./src/routes/route");

app.use("/api", AllRoutes)

app.listen(port, async () => {
    try {
        await connect();
        console.log(`Port running in ${port}`)
    } catch (error) {
        console.log(error)
    }
})