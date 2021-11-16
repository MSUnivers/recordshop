const express = require('express');
const router = express.Router();
const {addUser,validateController}=require('../controllers/usersController.js')
const low = require("lowdb");
const {schemaValidationMiddelware,ageValidationMiddelware,validateMemberMiddelware}=require('../middelwares/myMiddleware.js')
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/validateUser",schemaValidationMiddelware, ageValidationMiddelware,validateMemberMiddelware,addUser)

//router.post('/addUser',addUser)

module.exports = router;
