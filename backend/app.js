const express = require("express");

const app = express();

module.exports = app;
app.use(express.json());

// Route Imports
const product = require("./routes/productRoute");

app.use("/api/v1", product);

module.exports = app;
