

function enableCors (req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET')
    console.log('hii');
    next();
}
module.exports = enableCors;