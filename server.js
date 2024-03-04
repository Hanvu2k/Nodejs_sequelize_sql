const express = require("express");
const cors = require("cors");
const PORT = process.env.PORT || 8080;

const app = express();

let corsOptions = {
  origin: "http://localhost:8081",
};

// middleware
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// router
const router = require("./routes/product.route");
app.use("/api/products", router);

// server

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
