const express =require("express");
const dotenv = require("dotenv");
// const argon2 = require("argon2")
// const jwt = require("jsonwebtoken");
const registerRoute = require("./routes/Register");
const userRoute = require("./routes/User");
const productRoute = require("./routes/Product");
const cartRoute = require("./routes/Cart");
const orderRoute = require("./routes/order");
require("./config/db")

//Models


// const auth = require("./middleware/auth");

const app = express();
app.use(express.json()); // so express will allow Json request Body
const port = 2000;
dotenv.config();






app.use("/api/signup", registerRoute);
app.use("/api/user", userRoute);
app.use("/api/products", productRoute);
app.use("/api/cart", cartRoute);
app.use("/api/order", orderRoute);












app.listen(port, () => {
    console.log(`Server is listening on port ${port}`)});
    console.log("hello world")
