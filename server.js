require("dotenv").config();
const express = require("express");
const app = express();

// add app.use(express.json()) for POSTMAN updates and New Adds to work
app.use(express.json());

// // HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

// app.use("/api/auth", require("./controllers/authController.js"));
app.use("/api/users", require("./controllers/usersController.js"));

app.use("/api/authors", require("./controllers/authorsController.js"));



app.listen(3000, () => {
  console.log("Nodemon listening");
});
