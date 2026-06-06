/* Description
 - Defines the post creation route and protects it with token-based
     authentication.
 - Reads the token from the request cookies and blocks the request when
     no token is present.
 - Verifies the JWT with the shared secret before allowing the request
     to continue.
 - Returns an unauthorized response for missing or invalid tokens and
     only reaches the success response when the token is valid.
*/

const express = require("express");
const jwt = require("jsonwebtoken");
 
const router = express.Router();

router.post("/create", (req, res)=>{
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({
            message: "UnAuthorized"
        });
    }

    try{
        jwt.verify(token, process.env.JWT_SECRET);
    }catch(err){
        return res.status(401).json({
            message: "Token is Invalid"
        });
    }

    
    
    res.send("Post Created Succesfully");
})

module.exports = router;