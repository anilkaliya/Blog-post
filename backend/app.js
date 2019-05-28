const path = require("path");
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

const postsRoutes = require("./routes/posts");
 const userRoutes = require("./routes/users");
// K2fZmXVFUI8wlGXX
//"mongodb://anil:ashok@UR123@ds259586.mlab.com:59586/heroku_5h370ddf"
const app = express();
mongoose
  .connect("mongodb://anil:ashok@UR123@ds011248.mlab.com:11248/heroku_c9vg63bf")
  .then(() => {
    console.log("Connected to database!");
  })
  .catch(() => {
    console.log("Connection failed!");
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

  module.exports = app;