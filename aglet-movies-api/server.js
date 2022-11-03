require("dotenv").config();
const express = require("express");
const movieRoutes = require("./routes/movies");

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

// uri left intentionally for Aglet team to easily connect
mongoose
  .connect(
    "mongodb+srv://aglet_user:0g6c6YfrB3M6D8qu@aglet.isabipx.mongodb.net/?retryWrites=true&w=majority",
    // process.env.MONGO_DB_URI
  )
  .then(() => {
    //start server after successfull database connection
    app.listen(process.env.PORT, console.log("server started on port 5000"));
  })
  .catch((err) => {
    console.log(err);
  });

//
