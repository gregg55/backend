require("dotenv").config();
const express = require("express");
const app = express();
var cors = require('cors')

app.use(cors());

// add app.use(express.json()) for POSTMAN updates and New Adds to work
app.use(express.json());

// // HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header('Access-Control-Allow-Methods', 'OPTIONS, POST, DELETE');
  next();

});


// app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));

app.use("/api/authors", require("./controllers/authorsController.js"));
app.use("/api/authors", require("./controllers/authorsController.js"));

app.listen(3000, () => {
  console.log("Nodemon listening");

});
