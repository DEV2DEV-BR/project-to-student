require("dotenv").config();
require("./database/index");

const express = require("express");
const app = express();

app.use(express.json());

app.listen(process.env.PORT, () =>
  console.log(`Server is on in port ${process.env.PORT}`)
);
