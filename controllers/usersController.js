const low = require("lowdb");
const FileSync = require("lowdb/adapters/FileSync");
const adapter = new FileSync("data/db.json");
const db = low(adapter);



exports.addUser = (req, res, next) => {
  const user = req.body;
  db.get("users")
    .push(user)
    .write();

  res.status(200).send('the user is valid and has been registered');
};

/* exports.validateController=(req,res, next) =>{
res.json({msg:'We can not validate your user. The lastName is required'})


}
 */