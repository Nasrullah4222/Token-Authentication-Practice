/* Description
 - Defines the routes related to authentication and cookie testing.
 - Maps POST /register to the registration controller so new users can
     sign up through the auth flow.
 - Adds a test route that prints and returns cookies, which is useful
     for verifying that the token cookie is being sent correctly.
 - Keeps routing separate from business logic by forwarding the actual
     work to the controller.
*/

const express = require('express');
const authController = require('../controllers/auth.controller');


const router = express.Router();

/* POST /register */
router.post("/register", authController.registerUser)
router.get("/test", (req, res)=>{
    console.log("Cookies: ", req.cookies);
    res.json({
        message: "Test routes",
        cookies: req.cookies
    })
})
module.exports = router;