exports.schemaValidationMiddelware = (req, res, next) => {
  if (
    req.body.hasOwnProperty("firstName") &&
    req.body.hasOwnProperty("lastName") &&
    req.body.hasOwnProperty("email") &&
    req.body.hasOwnProperty("age") &&
    req.body.hasOwnProperty("fbw")
  ) {
    next();
  } else {
    res.json({ msg: "This user is not valid!" });
  }
};

exports.ageValidationMiddelware = (req, res, next) => {
  if (req.body.age <= 18) {
    res.json("We can not validate your user. They are  below 18 years ");
  } else {
    next();
  }
};
exports.validateMemberMiddelware=(req,res,next) => {
if(req.body.hasOwnProperty('fbw')&&req.body.fbw==36){
    next()
}else{
    res.send({msg:'We can not validate your user. They are not a member of FBW36'})
}

}
