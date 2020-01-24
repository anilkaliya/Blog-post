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
  .catch(() => {
    console.log("Connection failed to database");
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 var distDir = __dirname + "/../dist/";
 app.use(express.static(distDir));
 app.use("/images", express.static(path.join("backend/images")));

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