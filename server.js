
const express = require("express");
const app = express();

// // HOMEPAGE
app.get("/", (req, res) => {
  res.json({ message: "express api app is working" });
});

// app.use("/api/auth", require("./controllers/authController.js"));
// app.use("/api/users", require("./controllers/usersController.js"));
// // added step below for artistsController
// app.use("/api/artists", require("./controllers/artistsController.js"));



app.listen(3000, () => {
  console.log("Nodemon listening");
});
