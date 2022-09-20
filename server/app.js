const express = require("express");
const cors = require("cors");
const path = require("path");
const ProductRouter = require("./Routers/ProductRouter");
const UserRouter = require("./Routers/UserRouter");
const StripeRouter = require("./Routers/StripeRouter");
const OrderRouter = require("./Routers/OrderRouter");
const CommentRouter = require("./Routers/CommentRouter");
const { verifyUsers, verifyAdmin } = require("./Routers/verify");
const app = express();
app.use(cors());
app.use(express.json());
app.use("/Api/product", ProductRouter);
app.use("/Api/user", UserRouter);
app.use("/Api/payment", StripeRouter);
app.use("/Api/order", OrderRouter);
app.use("/Api/comment", CommentRouter);

app.get("/", (req, res) => {
  res.send("your Server is running...");
});

module.exports = app;
