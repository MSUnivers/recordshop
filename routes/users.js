const express = require('express');
const router = express.Router();
const {addUser,sanitizerController}=require('../controllers/usersController.js')
const low = require("lowdb");
const {schemaValidationMiddelware,ageValidationMiddelware,validateMemberMiddelware}=require('../middelwares/myMiddleware.js')
const{capitalLetterMiddelware,sortMiddelware,integerConvertMiddelware}=require('../middelwares/sanitizerMiddelware.js')
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post("/validateUser",schemaValidationMiddelware, ageValidationMiddelware,validateMemberMiddelware,addUser)
router.post("/sanitizeUser",capitalLetterMiddelware,sortMiddelware,integerConvertMiddelware,sanitizerController)
//router.post('/addUser',addUser)

module.exports = router;
