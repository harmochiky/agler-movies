const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});
// mongoose.connect();

app.listen(5000, console.log("server started on port 5000"));
