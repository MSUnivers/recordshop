exports.capitalLetterMiddelware = (req, res, next) => {
  let capitalizedFirstName =
    req.body.firstName.charAt(0).toUpperCase() + req.body.firstName.slice(1);
  let capitalizedLastName =
    req.body.lastName.charAt(0).toUpperCase() + req.body.lastName.slice(1);
  req.body.firstName = capitalizedFirstName;
  req.body.lastName = capitalizedLastName;
  next();
};
exports.sortMiddelware = (req, res, next) => {
  let sorted = req.body.favoriteBands.sort();
  req.body.favoriteBands = sorted;
  next();
};
exports.integerConvertMiddelware=(req,res,next)=>{

    let convertedAge=parseInt(req.body.age);
    let convertedFbw=parseInt(req.body.fbw);
   req.body.age = convertedAge;
   req.body.fbw=convertedFbw;
   next()
}  
