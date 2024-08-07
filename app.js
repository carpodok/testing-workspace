const express = require("express");
const app = express();

app.use(express.json());
app.use("/", require("./userRoute"));

module.exports = app;
