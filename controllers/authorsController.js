const express = require("express");
const router = express.Router();

const UserModel = require("../models").User;
const AuthorModel = require("../models").Author;

// /// GET Author PROFILE -- POSTMAN CHECK 
router.get("/profile/:id", async (req, res) => {
    let author = await AuthorModel.findByPk(req.params.id, {
      include: 
      [{model: UserModel,attributes: ['id','name'] }],
  
    });
    res.json({ author });
  });
    
    // // GET ALL Authors - POSTMAN CHECK  - Confirmed
    router.get("/", async (req, res) => {
      let author = await AuthorModel.findAll();
      res.json({ author });
    });
    
// // CREATE A NEW Authors - POSTMAN CHECK 
router.post("/", async (req, res) => {
  let author = await AuthorModel.create(req.body);
  res.json({ author });
});


// // UPDATE Authors - POSTMAN CHECK 
router.put("/:id", async (req, res) => {
  let author = await UserModel.update(req.body, {
    where: { id: req.params.id },
    returning: true,
  });
  res.json({ author });
});

// // DELETE Authors - POSTMAN CHECK 
router.delete("/:id", async (req, res) => {
  await AuthorModel.destroy({
    where: { id: req.params.id },
  });
  res.json({
    message: `User with id ${req.params.id} was deleted`,
  });
});


module.exports = router;