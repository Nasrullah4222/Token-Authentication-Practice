/* Description
 - Handles the database connection logic for the application.
 - Uses Mongoose to connect to the MongoDB URI stored in the
     environment variables.
 - Runs once during startup so the app can confirm the database is
     available before serving requests.
 - Logs success when the connection works and logs the error if the
     connection fails.
*/

const mongoose = require('mongoose');

async function connectDB() {
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.log('DB connected succesfully');

    }catch (err){
        console.error("Database connection error: ", err);
    }
    
}

module.exports = connectDB;