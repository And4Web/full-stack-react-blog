const express = require("express");
const mongoose = require("mongoose");
const dotEnv = require("dotenv");

const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");

const PORT = 8000;

const app = express();

dotEnv.config();

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(console.log("connected to Mongo"))
  .catch((err) => console.log(err));

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);

app.get("/", (req, res) => {
  res.send("home page");
});

app.listen(PORT, () => console.log(`listening at ${PORT}`));
