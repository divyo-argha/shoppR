const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(require("./routes/all-routes"));
mongoose
  .connect(
    "mongodb+srv://user:user123@cluster0.ggrzho9.mongodb.net/we-bank?retryWrites=true&w=majority"
  )
  .then(() => {
    app.listen(4000, () => {
      console.log("bank started @4000");
    });
  })
  .catch((e) => {
    console.log(e);
  });
