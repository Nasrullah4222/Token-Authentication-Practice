/* Description
 - Defines the MongoDB user structure used by the application.
 - Builds a Mongoose schema that describes the shape of each user
     document stored in the database.
 - Stores the username shown to the user, the email used to identify
     accounts, and the password used during authentication.
 - Marks email as unique so the database can reject duplicate accounts.
 - Compiles the schema into a Mongoose model that controllers can use
     to create, query, and update user documents.
*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: String,
    email: {
        type: String,
        unique: true
    },
    password: String
});

const userModel = mongoose.model("user", userSchema);

module.exports = userModel;