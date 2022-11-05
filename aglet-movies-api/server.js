require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movies");
const userRoutes = require("./routes/users");

const cors = require("cors");
const mongoose = require("mongoose");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

app.use("/api/", movieRoutes);
app.use("/api/user", userRoutes);

// uri left intentionally for Aglet team to easily connect
mongoose
  .connect(process.env.MONGO_DB_URI)
  .then(() => {
    //start server after successfull database connection
    app.listen(process.env.PORT, console.log("server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });

//
