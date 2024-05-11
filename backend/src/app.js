require("dotenv").config();
const cors = require("cors");
const express = require("express");
const morgan = require("morgan");

const connectDB = require("./config/connectDB");
const usersRoutes = require("./routes/users.routes");
const productRoutes = require("./routes/product.routes");
const cartRoutes = require("./routes/cart.routes");

const PORT = process.env.PORT;
const DATABASE_URL = process.env.DATABASE_URL;
const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(express.json());
app.use(morgan("combined"));
app.use(usersRoutes);
app.use("/products", productRoutes);
app.use("/cart", cartRoutes);

connectDB(DATABASE_URL);
app.listen(PORT, () => {
  console.log(`app started listening to post : ${PORT}`);
});
