/* Description
 - Contains the registration logic for new users.
 - Reads the request body, checks whether the email already exists,
     and prevents duplicate accounts from being created.
 - Creates a new user document in MongoDB when the email is available.
 - Generates a JWT token using the new user's id and stores that token
     in a cookie so later routes can authenticate the user.
 - Returns a JSON response with the created user when registration
     succeeds, or an error response when the email already exists.
*/

const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken");

async function registerUser(req, res){

    const {userName, email, password} = req.body;

    const isUserAlreadyExist = await userModel.findOne({
        email
    });

    if(isUserAlreadyExist){
        return res.status(409).json({
            message:"User Already exist."
        })
    }


    const user = await userModel.create({
        username: userName,
        email: email,
        password: password
    })

    const token =jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET);

    res.cookie("token", token);

    res.status(201).json({
        message: "User register successfully",
        user
    })

    
}

module.exports = { registerUser };