require("dotenv").config();
const express = require("express");

const app = express();

const homeRoute = require("./routes/index");

app.use("/", homeRoute);

app.listen(process.env.SERVER_PORT, () =>
  console.log(`server started on  port ${process.env.SERVER_PORT}`)
);
