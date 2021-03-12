const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const AuthorModel = require("../models").Author;

// GET USER PROFILE
router.get("/profile/:id", async (req, res) => {
  let user = await UserModel.findByPk(req.params.id, {
    include: AuthorModel,
  });
  res.json({ users });
});

// GET ALL USERS - Added & then go to POSTMAN - CONFIRMED it Worked
router.get("/", async (req, res) => {
  let users = await UserModel.findAll();
  res.json({ users });
});

// CREATE A NEW USER - added & go to POSTMAN - CONFIRMED it Worked
router.post("/", async (req, res) => {
    let user = await UserModel.create(req.body);
    res.json({ user });
  });
  
  
  // UPDATE A USER - Change or Update - POSTMAN - CONFIRMED it worked
  router.put("/:id", async (req, res) => {
    let user = await UserModel.update(req.body, {
      where: { id: req.params.id },
      returning: true,
    });
    res.json({ users });
  });
  
  // DELETE A USER - Confirmed it Worked
  router.delete("/:id", async (req, res) => {
    await UserModel.destroy({
      where: { id: req.params.id },
    });
    res.json({
      message: `User with id ${req.params.id} was deleted`,
    });
  });

module.exports = router;