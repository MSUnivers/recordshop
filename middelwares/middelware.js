
function enableCors (req,res,next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET POST UPDATE DELETE')
    console.log('hii');
    next();
}


module.exports = {enableCors };