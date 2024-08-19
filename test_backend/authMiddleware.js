const JWT_SECRET = require("./config");

const authMiddleware=(req, res, next)=>{
const authToken = req.header.authorisation;
if(!authToken || !authToken.startsWith('Bearer ')){
    return res.status(401).send({message: 'Access denied. No token provided'});
}
// const token = authToken.substring(7, authToken.length);
const splitedToken = authToken.split(' ');
const token = splitedToken[1];
try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.userId = decoded;
    next();
} catch(error){
    return res.status(400).json({
        message: 'Invalid token'
    })
}
}

module.exports = authMiddleware;