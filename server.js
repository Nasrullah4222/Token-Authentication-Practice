/* Description
 - Boots the application by loading environment variables, connecting
     to MongoDB, and starting the HTTP server.
 - This file is the entry point of the project, so it wires together
     the database setup and the Express app before the server begins
     accepting requests.
 - The server listens on port 3000 and prints a startup message when
     the application is ready.
*/

const app = require('./src/app');
const connectDB = require('./src/db/db');
require ('dotenv').config();

connectDB();


app.listen(3000, ()=>{
    console.log("Server is running on port 3000"); 
});