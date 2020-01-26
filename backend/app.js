const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const movieRoutes = require("./routes/movie");
const postsRoutes = require("./routes/posts");
 const userRoutes = require("./routes/users");

const app = express();
// mongoose
//   .connect("mongodb://localhost:27017/local")
//   .then(() => {
//     console.log("Connected to database!");
//   })
//   .catch(() => {
//     console.log("Connection failed!");
//   });
mongoose
  .connect(process.env.MONGOLAB_CHARCOAL_URI)
  .then(() => {
    console.log("Connected to database!");
  })
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST, PATCH, PUT, DELETE, OPTIONS"
    );
    next();
  });


  app.use("/api/posts", postsRoutes);
  app.use("/api/users", userRoutes);
  app.use("/api/movies",movieRoutes);
  module.exports = app;