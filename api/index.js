const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = 8000;
const dotEnv = require("dotenv");

dotEnv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to Mongo"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(PORT, () => console.log(`listening at ${PORT}`));
